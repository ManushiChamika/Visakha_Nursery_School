// Toggle navigation for mobile
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

toggleBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', open);
});

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        closeBook(false); // Final page
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}


function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 2;
        break;
      case 5:
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation--;
  }
}


// <-- =========================  FOOTER JS  ========================= -->
const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


//   <!-- ============  Q&A Accordion Script  ============ -->
document.addEventListener('DOMContentLoaded', function() {
            const details = document.querySelectorAll('details');
            const searchInput = document.getElementById('searchInput');
            const resultCount = document.getElementById('resultCount');
            const noResults = document.getElementById('noResults');
            const expandAllBtn = document.getElementById('expandAllBtn');
            const collapseAllBtn = document.getElementById('collapseAllBtn');
            
            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                let visibleCount = 0;
                
                details.forEach(detail => {
                    const question = detail.querySelector('summary').textContent.toLowerCase();
                    const content = detail.querySelector('.content').textContent.toLowerCase();
                    
                    if (question.includes(searchTerm) || content.includes(searchTerm)) {
                        detail.style.display = 'block';
                        visibleCount++;
                        
                        // Highlight matching text in summary
                        const summaryText = detail.querySelector('summary').innerHTML;
                        const highlightedSummary = summaryText.replace(
                            new RegExp(searchTerm, 'gi'),
                            match => `<span class="highlight">${match}</span>`
                        );
                        detail.querySelector('summary').innerHTML = highlightedSummary;
                    } else {
                        detail.style.display = 'none';
                    }
                });
                
                // Update result count
                resultCount.textContent = `Displaying ${visibleCount} of ${details.length} questions`;
                
                // Show/hide no results message
                if (visibleCount === 0 && searchTerm.length > 0) {
                    noResults.style.display = 'block';
                } else {
                    noResults.style.display = 'none';
                }
            });
            
            // Expand all functionality
            expandAllBtn.addEventListener('click', function() {
                details.forEach(detail => {
                    detail.open = true;
                });
            });
            
            // Collapse all functionality
            collapseAllBtn.addEventListener('click', function() {
                details.forEach(detail => {
                    detail.open = false;
                });
            });
            
            // Accordion animations
            details.forEach(detail => {
                detail.addEventListener('toggle', function() {
                    if (this.open) {
                        this.style.zIndex = '10';
                    } else {
                        setTimeout(() => {
                            this.style.zIndex = '';
                        }, 300);
                    }
                });
            });
        });