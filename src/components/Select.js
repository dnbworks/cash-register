import React, { useRef, useState, useEffect } from 'react';

const Select = () => {
    const customSelect = useRef(null);
    const customDiv = useRef(null);
    var x, i, j, l, ll, selElmnt, a, b, c;

    useEffect(() => {
        ll = customSelect.current.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = customSelect.current.options[customSelect.current.selectedIndex].innerHTML;
        customDiv.current.appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = customSelect.current.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
                }
                h.click();
            });
            b.appendChild(c);
        }
        customDiv.current.appendChild(b);

        a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });

        function closeAllSelect(elmnt) {
            /* A function that will close all select boxes in the document,
            except the current select box: */
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
              if (elmnt == y[i]) {
                arrNo.push(i)
              } else {
                y[i].classList.remove("select-arrow-active");
              }
            }
            for (i = 0; i < xl; i++) {
              if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
              }
            }
          }
          
          /* If the user clicks anywhere outside the select box,
          then close all select boxes: */
          document.addEventListener("click", closeAllSelect);
        
        console.log(customDiv.current);
    }, []);

  return (
    <div className="custom-select" style={{ width: "125px" }} ref={customDiv}>
        <select ref={customSelect}>
            <option value="0">Select</option>
            <option value="1">Product Name</option>
            <option value="2">Date inserted</option>
            <option value="3">No. items sold</option>
            <option value="4">Price</option>
        </select>
    </div>
  )
}

export default Select