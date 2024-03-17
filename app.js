const ulTag = document.querySelector(".pagination");

let totalPages = 20;

function showElements(totalPages, page) {
  let liTag = "";
  let activeTag;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page > 1) {
    liTag += `<li class="prev" onclick="showElements(totalPages, ${page - 1})">
       <i class="fa-solid fa-chevron-left"></i>
       <span>Prev</span>
       </li>`;
  }

  if (page > 2) {
    liTag += `<li class="num" onclick="showElements(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page > totalPages) {
    beforePage -= 1;
  } else if (page > totalPages - 2) {
    beforePage -= 2;
  }

  if (page == 1) {
    afterPage += 2;
  } else if (page == 2) {
    afterPage += 1;
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
    if (pageLength > totalPages) break;
    if (pageLength == 0) {
      pageLength++;
    }
    page == pageLength ? (activeTag = "active") : (activeTag = "");
    liTag += `<li class="num ${activeTag}" onclick="showElements(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  // console.log(page);
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="num" onclick="showElements(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="next" onclick="showElements(totalPages, ${page + 1})">
        <span>Next</span>
        <i class="fa-solid fa-chevron-right"></i>
        </li>`;
  }

  ulTag.innerHTML = liTag;
}

showElements(totalPages, 5);
