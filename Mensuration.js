let normal_div = document.createElement('div');
let series_box = document.querySelector('#series-box');
let div_series_box_child_h2 = series_box.children[0];
let div_series_box_child_div_notice_box = series_box.children[1];
let operation_box = document.querySelector('#dropdownMenu1');
let go_operation = document.querySelector('#go');
go_operation.addEventListener('click', function execution(e) {
    let val=operation_box.value;
    if (val == "Square") {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
                <option class="dropdown-item" value="Diagonal">Diagonal of ${val}</option>
                <option class="dropdown-item" value="Side">Side of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Side :- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Area :- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Perimeter :- </label>
         <input type="number" id="p" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
    
            if (document.querySelector('.Ap-operation').value == 'Area') {
               let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let result = a*a;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
              let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let result = a * 4;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Perimeter of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Diagonal') {
               let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let result = a * Math.sqrt(2);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Diagonal of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Side') {
                
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let result=0;
                    if ((a==0 || a==NaN)&& p!=0) {
                        result = p/4;  
                    }
                    else if((p==0 || p==NaN) && a!=0)
                    {
                       result = Math.sqrt(a);
                    }
                    else
                    {
                        result =0;
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Side of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }
        })
    }
    else if (val == 'Rectangle') {

        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
                <option class="dropdown-item" value="Length">Length of ${val}</option>
                <option class="dropdown-item" value="Breadth">Breadth of ${val}</option>
                <option class="dropdown-item" value="Diagonal">Diagonal of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Length :- </label>
         <input type="number" id="l" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Breadth :- </label>
         <input type="number" id="b" >
         <br>
         </div>
         <label class ="label">Enter Perimeter :- </label>
         <input type="number" id="p" >
         <br>
         </div>
         <label class ="label">Enter Area :- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Area') {
                  let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = l * b;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
                
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = 2*(l+b);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Diagonal') {

                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = Math.sqrt((Math.pow(l,2)+(Math.pow(b,2))));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Diagonal of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Length') {

                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = a/b;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Length of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Breadth') {

                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let l = parseFloat(document.querySelector('#l').value);
                    let result = a / l;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Breadth of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Circle') {

        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Circumference of ${val}</option>
                <option class="dropdown-item" value="Radius">Radius of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Radius :- </label>
         <input type="number" id="r" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Area :- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Circumference :- </label>
         <input type="number" id="c" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;

            if (document.querySelector('.Ap-operation').value == 'Area') {
               let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (Math.PI)*r*r;;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
               let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (Math.PI) * 2* r;;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Circumference of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Radius') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let  c= parseFloat(document.querySelector('#c').value);
                    let a = parseFloat(document.querySelector('#a').value);
                    let result=0;
                    if(c==NaN && a!=0)
                    {
                        result = Math.sqrt((a/(2(Math.PI))));
                    }
                    else if (a == NaN && p != 0) {
                        result = (p / (2(Math.PI)));
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Radius of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Triangle') {

        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Side 1 :- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 2 :- </label>
         <input type="number" id="b" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 3 :- </label>
         <input type="number" id="c" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let c = parseFloat(document.querySelector('#c').value);
                    let result =0;
                    if((a!=b)&&(b!=c)&&(c!=a))
                    {
                        let s= (a+b+c)/2;
                        let m = s * (s - a) * (s - b) * (s - c);
                        result = Math.sqrt(m);
                    }
                    else if(a==b==c)
                    {
                        result = ((Math.sqrt(3)) * a * a) / 4;
                    }
                    else if(a==b)
                    {
                        let base = c / 2;
                        console.log(base);
                        let h= Math.sqrt(Math.pow(a,2)-Math.pow(base,2));
                        console.log(h);
                        result = (1 / 2) * base*h;
                    }
                    else if (b == c) {
                        let base = a / 2;
                        console.log(base);
                        let h = Math.sqrt(Math.pow(b, 2) - Math.pow(base, 2));
                        console.log(h);
                        result = (1 / 2) * base * h;
                    }
                    else if (c == a) {
                        let base = b / 2;
                        console.log(base);
                        let h = Math.sqrt(Math.pow(c, 2) - Math.pow(base, 2));
                        console.log(h);
                        result = (1 / 2) * base * h;
                    }
                    else
                    {
                        alert('Invalid Triangle');
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let c = parseFloat(document.querySelector('#c').value);
                    let result = a+b+c;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Rhombus') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Diagonal 1 of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Diagonal 2 of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Side of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
       document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
           notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Side :- </label>
         <input type="number" id="l" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Diagonal 1 :- </label>
         <input type="number" id="d1" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Diagonal 2 :- </label>
         <input type="number" id="d2" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Area :- </label>
         <input type="number" id="a" >
         <br>
            </div>
         <div class="Operation">
         <label class ="label">Enter Perimeter :- </label>
         <input type="number" id="p" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
           if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let d1 = parseFloat(document.querySelector('#d1').value);
                    let d2 = parseFloat(document.querySelector('#d2').value);
                    let result = (1/2)*d1*d2;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
           else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let result = 4*l;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Perimeter of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
           else if (document.querySelector('.Ap-operation').value == 'Side') {
               let go_parameter = document.querySelector('.go_parameter');
               go_parameter.addEventListener('click', function evalulation(e) {
                   e.preventDefault();
                   let p = parseFloat(document.querySelector('#p').value);
                  let result = 0;
                   result=p/4;
                   let result_box = document.querySelector('#result-box');
                   result_box.removeChild(result_box.children[0]);
                   result_box.innerHTML = `<h5>Perimeter of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
               })
           }
           else if (document.querySelector('.Ap-operation').value == 'Diagonal1') {
               let go_parameter = document.querySelector('.go_parameter');
               go_parameter.addEventListener('click', function evalulation(e) {
                   e.preventDefault();
                   let a = parseFloat(document.querySelector('#a').value);
                   let d2 = parseFloat(document.querySelector('#d2').value);
                   let result = (2*a)/d2;
                   let result_box = document.querySelector('#result-box');
                   result_box.removeChild(result_box.children[0]);
                   result_box.innerHTML = `<h5>Diagonal 1 of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
               })
           }
           else if (document.querySelector('.Ap-operation').value == 'Diagonal2') {
               let go_parameter = document.querySelector('.go_parameter');
               go_parameter.addEventListener('click', function evalulation(e) {
                   e.preventDefault();
                   let a = parseFloat(document.querySelector('#a').value);
                   let d1 = parseFloat(document.querySelector('#d1').value);
                   let result = (2 * a) / d1;
                   let result_box = document.querySelector('#result-box');
                   result_box.removeChild(result_box.children[0]);
                   result_box.innerHTML = `<h5>Diagonal 2 of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
               })
           }
           
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Paralellogram') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter height :- </label>
         <input type="number" id="h" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter length :- </label>
         <input type="number" id="l" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter base :- </label>
         <input type="number" id="b" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let h= parseFloat(document.querySelector('#h').value);
                    let base = parseFloat(document.querySelector('#b').value);
                    let result = h*base;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let base = parseFloat(document.querySelector('#b').value);
                    let result = 2*(l+base);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Perimeter of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Trapezium') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Area of ${val}</option>
                <option class="dropdown-item" value="Perimeter">Perimeter of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter height :- </label>
         <input type="number" id="h" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 1 (Upper Base):- </label>
         <input type="number" id="a" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 2 (Upper Base):- </label>
         <input type="number" id="b" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 3 :- </label>
         <input type="number" id="c" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Side 4 :- </label>
         <input type="number" id="d" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let h = parseFloat(document.querySelector('#h').value);
                    let base = parseFloat(document.querySelector('#b').value);
                    let a1 = parseFloat(document.querySelector('#a').value);
                    let result = (h * (base+a1))/2;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Perimeter') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a1 = parseFloat(document.querySelector('#a').value);
                    let b1 = parseFloat(document.querySelector('#b').value);
                    let c1 = parseFloat(document.querySelector('#c').value);
                    let d1 = parseFloat(document.querySelector('#d').value);
                    let result = a+b+c+d;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Perimeter of ${val} = ${result} units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }

    else if (val == 'Cube') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Surface area of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Side :- </label>
         <input type="number" id="s" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let s = parseFloat(document.querySelector('#s').value);
                    let result = s*s*s;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let s = parseFloat(document.querySelector('#s').value);
                    let result = 6*s*s;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Surface area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Cuboid') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="Area">Surface area of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Length :- </label>
         <input type="number" id="l" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Breadth :- </label>
         <input type="number" id="b" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Height :- </label>
         <input type="number" id="h" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let h = parseFloat(document.querySelector('#h').value);
                    let result =l*b*h;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'Area') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let l = parseFloat(document.querySelector('#l').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let h = parseFloat(document.querySelector('#h').value);
                    let result =2((l*b)+(b*h)+(h*l));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Sphere') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="CircularArea">CSA of ${val}</option>
                <option class="dropdown-item" value="TotalArea">TSA of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Radius :- </label>
         <input type="number" id="r" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (4/3)*(Math.PI)*(r*r*r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'TotalArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (4)*(Math.PI)*(r*r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Total Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'CircularArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (4) * (Math.PI) * (r * r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Circular Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Hemisphere') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="CircularArea">CSA of ${val}</option>
                <option class="dropdown-item" value="TotalArea">TSA of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Radius :- </label>
         <input type="number" id="r" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (2 / 3) * (Math.PI) * (r * r * r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'TotalArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (3) * (Math.PI) * (r * r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Total Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'CircularArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (2) * (Math.PI) * (r * r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Circular Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Cylinder') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="CircularArea">CSA of ${val}</option>
                <option class="dropdown-item" value="TotalArea">TSA of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Radius :- </label>
         <input type="number" id="r" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Height :- </label>
         <input type="number" id="h" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let h = parseFloat(document.querySelector('#h').value);
                    let result = (Math.PI)*(r*r)*h;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'TotalArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = 2*(Math.PI)*r*(h+r);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Total Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'CircularArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = (2)*(Math.PI)*r*h;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Circular Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (val == 'Cone') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>${val}</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="CircularArea">CSA of ${val}</option>
                <option class="dropdown-item" value="TotalArea">TSA of ${val}</option>
                <option class="dropdown-item" value="Volume">Volume of ${val}</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div></div >`;
        document.querySelector('#go-ap').addEventListener('click', function shape_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            notice_box.removeChild(h3_child);
            notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter Radius :- </label>
         <input type="number" id="r" >
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Length :- </label>
         <input type="number" id="l" >
         <br>
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
            if (document.querySelector('.Ap-operation').value == 'Volume') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let l = parseFloat(document.querySelector('#l').value);
                    let result = ((Math.PI) * (r * r) * l)/3;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Volume of ${val} = ${result} cube units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'TotalArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let l = parseFloat(document.querySelector('#l').value);
                    let result = (Math.PI) * r * (r + l);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Total Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (document.querySelector('.Ap-operation').value == 'CircularArea') {
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let r = parseFloat(document.querySelector('#r').value);
                    let l = parseFloat(document.querySelector('#l').value);
                    let result = (Math.PI) * r * l;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Circular Surface Area of ${val} = ${result} square units</h5><div class="Operation"><a href="Mensuration.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
})
