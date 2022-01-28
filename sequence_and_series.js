let normal_div = document.createElement('div');
let series_box = document.querySelector('#series-box');
let div_series_box_child_h2 = series_box.children[0];
let div_series_box_child_div_notice_box = series_box.children[1];
let operation_box = document.querySelector('#dropdownMenu1');
let go_operation = document.querySelector('#go');
go_operation.addEventListener('click', function execution(e) {
    if (operation_box.value == 'AP') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>Arithmetic Progression</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="nth-termAP"> Nth term in AP</option>
                <option class="dropdown-item" value="Sum-of-n-terms"> The sum of first N terms</option>
                <option class="dropdown-item" value="Common-Difference-Succ-Preced">Common Difference</option>
                <option class="dropdown-item" value="n-f-n-terms">Number of Terms from Nth Term</option>
                <option class="dropdown-item" value="n-f-sum">Number of Terms from sum of N Terms</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`

        document.querySelector('#go-ap').addEventListener('click', function Ap_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            let operation_box_series = document.querySelector('.Ap-operation');
            if (operation_box_series.value == 'nth-termAP') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter First Term :- </label>
         <input type="number" id="a" name="salary">
         <br>
         </div>
         <div class="Operation">
         <label class="label">Enter Number of terms :- </label>
         <input type="number" id="n" name="salary">
         </div>
         <div class="Operation">
         <label class="label">Enter Common Difference :- </label>
         <input type="number" id="d" name="salary">
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let d = parseFloat(document.querySelector('#d').value);
                    let result = a + ((n - 1) * d);
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Nth Term = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'Sum-of-n-terms') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter First Term :- </label>
         <input type="number" id="a" name="salary">
         <br>
         </div>
         <div class="Operation">
         <label class="label">Enter Number of terms :- </label>
         <input type="number" id="n" name="salary">
         </div>
         <div class="Operation">
         <label class="label">Enter Common Difference :- </label>
         <input type="number" id="d" name="salary">
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let d = parseFloat(document.querySelector('#d').value);
                    let result = ((n / 2) * ((2 * a) + ((n - 1) * d)));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Sum of 1rst N Terms = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 'n-f-n-terms') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
         <label class ="label">Enter 1rst Term :- </label>
         <input type="number" id="a" name="salary">
         <br>
         </div>
         <div class="Operation">
         <label class ="label">Enter Nth Term :- </label>
         <input type="number" id="a-n" name="salary">
         <br>
         </div>
         <div class="Operation">
         <label class="label">Enter Common Difference :- </label>
         <input type="number" id="d" name="salary">
         </div>
         <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let d = parseFloat(document.querySelector('#d').value);
                    let result = ((an - a) / d) + 1;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Number Terms = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 'n-f-sum') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
               <label class ="label">Enter 1rst Term :- </label>
               <input type="number" id="a" name="salary">
               <br>
               </div>
               <div class="Operation">
               <label class ="label">Enter Sum of N Terms :- </label>
               <input type="number" id="s-n" name="salary">
               <br>
               </div>
               <div class="Operation">
               <label class="label">Enter Common Difference :- </label>
               <input type="number" id="d" name="salary">
               </div>
               <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let sn = parseFloat(document.querySelector('#s-n').value);
                    let d = parseFloat(document.querySelector('#d').value);
                    let result1 = (((-((2 * a) - d)) + (Math.sqrt((Math.pow(((2 * a) - d), 2)) - (4 * d * (((-2) * (sn))))))) / (2 * d));
                    let result2 = (((-((2 * a) - d)) - (Math.sqrt((Math.pow(((2 * a) - d), 2)) - (4 * d * (((-2) * (sn))))))) / (2 * d));
                    if ((Number.isInteger(result1) == true) && (result1 >= 0)) {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The Number Terms = ${result1}</h5>
                <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                    else if ((Number.isInteger(result2) == true) && (result2 >= 0)) {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The Number Terms = ${result2}</h5>
                <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                    else {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The Series is not Valid</h5>
                <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                })
            }
            else if (operation_box_series.value == 'Common-Difference-Succ-Preced') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Successive Term :- </label>
                <input type="number" id="a2" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Preceeding Term :- </label>
                <input type="number" id="a1" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a2 = parseFloat(document.querySelector('#a2').value);
                    let a1 = parseFloat(document.querySelector('#a1').value);
                    let result = a2 - a1;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Common Difference Between Successive and Preceeding Term = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish --></button></a></div>`;
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (operation_box.value == 'AM') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>Arithmetic Mean</h2>
            <div class="choosing-box-series">
        <h3 style="text-align: center;">Choose Your Operation</h3>
        <div><div class="Operation">
            <label class="label">Enter your Operation:</label>
            <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" placeholder="Location">
                <option class="dropdown-item" value="Select Operation">Select Operation</option>
                <option class="dropdown-item" value="nth-termAM">Nth term in AM</option>
                <option class="dropdown-item" value="Sum-of-n-terms">The sum of N terms in AM</option>
                <option class="dropdown-item" value="n-f-n-terms">Last term from Nth term</option>
                <option class="dropdown-item" value="first-term">First terms from Nth term</option>
                <option class="dropdown-item" value="n-term">Number of terms</option>
            </select>
            <br>
        </div>
        <div class="Operation"><button type="button" class="btn btn-dark" id="go-ap">Go -></button></div></div>
     </div >`
        document.querySelector('#go-ap').addEventListener('click', function Ap_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            let operation_box_series = document.querySelector('.Ap-operation');
            if (operation_box_series.value == 'nth-termAM') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Last term :- </label>
                <input type="number" id="b" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = (a + ((n * (b - a)) / (n + 1)));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Nth Term in AM = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }

            else if (operation_box_series.value == 'Sum-of-n-terms') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Last term :- </label>
                <input type="number" id="b" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = 0;
                    for (let index = 1; index <= n; index++) {
                        result = result + (a + ((n * (b - a)) / (n + 1)));
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Sum of 1rst N Terms in AM = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 'n-f-n-terms') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter 1rst Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class ="label">Enter Nth Term :- </label>
                <input type="number" id="a-n" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let result = (((an * (n + 1)) - a) + an) / n;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Last Term = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 'first-term') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Last Term :- </label>
                <input type="number" id="b" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class ="label">Enter Nth Term :- </label>
                <input type="number" id="a-n" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let b = parseFloat(document.querySelector('#b').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let result = ((((an * (n + 1)) - n * b)) / (1 - n));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The 1rst Term = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 'n-term') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class ="label">Enter Last Term :- </label>
                <input type="number" id="b" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Nth term :- </label>
                <input type="number" id="a-n" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let b = parseFloat(document.querySelector('#b').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let result = ((a - an) / (an - b));
                    if (Number.isInteger(result) == false && Number.isNaN(result) == false) {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The number of terms is in Faction. The Value = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                    else if (Number.isInteger(result) == true) {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>Number of terms is = ${result}</h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                    else {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The number of terms is infinite. </h5>
            <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                })
            }
            else {
                alert('Please Select an Option');
            }

        })
    }
    else if (operation_box.value == 'GP') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>Geometric Progression</h2>
                <div class="choosing-box-series">
            <h3 style="text-align: center;">Choose Your Operation</h3>
            <div><div class="Operation">
                <label class="label">Enter your Operation:</label>
                <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" placeholder="Location">
                    <option class="dropdown-item" value="Select Operation">Select Operation</option>
                    <option class="dropdown-item" value="nth-termGP"> Nth term in GP</option>
                    <option class="dropdown-item" value="Sum-of-n-terms">Sum of first N terms</option>
                    <option class="dropdown-item" value="s-i-g-p">Sum of Infinite GP series</option>
                    <option class="dropdown-item" value="f-f-n-term">First term from Nth Term</option>
                    <option class="dropdown-item" value="n-f-n">Number of Terms from Nth Term</option>
                    <option class="dropdown-item" value="c-f-n-term">Common Ratio from Nth Term</option>
                    <option class="dropdown-item" value="n-f-sum-term">Number of Terms from sum of N Terms</option>
                </select>
                <br>
            </div>
            <div class="Operation"><button type="button" class="btn btn-dark" id="go-gp">Go -></button></div></div>
         </div >`;
        document.querySelector('#go-gp').addEventListener('click', function Gp_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            let operation_box_series = document.querySelector('.Ap-operation');
            if (operation_box_series.value == 'nth-termGP') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Common Ratio :- </label>
                <input type="number" id="r" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = a * (Math.pow(r, n - 1));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Nth Term = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'Sum-of-n-terms') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Common Ratio :- </label>
                <input type="number" id="r" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = 0;
                    if (r < 1) {
                        result = (a * (1 - Math.pow(r, n))) / (1 - r);
                    }
                    else if (r > 1) {
                        result = (a * (Math.pow(r, n) - 1)) / (r - 1);
                    }
                    else {
                        result = n * a;
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Sum of 1rst N Terms = ${result}</h5>
                    <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                })
            }
            else if (operation_box_series.value == 's-i-g-p') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Common Ratio :- </label>
                <input type="number" id="d" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let r = parseFloat(document.querySelector('#r').value);
                    let result =0;
                    if (r >=1) {
                        let result_box = document.querySelector('#result-box');
                        result_box.removeChild(result_box.children[0]);
                        result_box.innerHTML = `<h5>The Sum of Infinite GP series = infinite</h5>
                        <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;
                    }
                    else
                    {
                        result = a/(1-r);
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Sum of infinite GP series = ${result}</h5>
                    <div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`;

                })
            }
            else if (operation_box_series.value == 'f-f-n-term') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Nth Term :- </label>
                <input type="number" id="a-n" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Common Ratio :- </label>
                <input type="number" id="r" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = an/((Math.pow(r,n-1)));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The First Term = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'n-f-n') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter 1rst Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Nth term :- </label>
                <input type="number" id="a-n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Common Ratio :- </label>
                <input type="number" id="r" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let x=an/a;
                    let result=0;
                    let r = parseFloat(document.querySelector('#r').value);
                    for (let index = 0; index <=n; index++) {
                         if(Math.pow(r,index)==x)
                         {
                            result=index+1;
                            break;    
                         }
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Number of terms = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'c-f-n-term') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter 1rst Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Nth term :- </label>
                <input type="number" id="a-n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let an = parseFloat(document.querySelector('#a-n').value);
                    let x = an / a;
                    let result = 0;
                    let n = parseInt(document.querySelector('#n').value);
                    for (let index = 0; index <n; index+=0.01) {
                        if (Math.pow(index,n-1) == x) {
                            result = index;
                            break;
                        }
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Common Ratio = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'n-f-sum-term') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter 1rst Term :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Sum of N terms :- </label>
                <input type="number" id="s-n" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter common ratio :- </label>
                <input type="number" id="r" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let sn = parseFloat(document.querySelector('#s-n').value);                    
                    let r = parseFloat(document.querySelector('#r').value);
                    let result = 0;
                    if(r!=1)
                    {
                        let x = (((sn * (r - 1)) / (a)) + 1);
                        for (let index = 0; index <= n; index++) {
                            if (Math.pow(r, index) == x) {
                                result = index + 1;
                                break;
                            }
                        }
                    }
                    else
                    {
                       result=(sn/a);
                    }
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>Number of terms= ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else
            {
                alert('Please Select an Option');
            }
        })
    }
    else if (operation_box.value == 'GM') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>Geometric Mean</h2>
                <div class="choosing-box-series">
            <h3 style="text-align: center;">Choose Your Operation</h3>
            <div><div class="Operation">
                <label class="label">Enter your Operation:</label>
                <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" placeholder="Location">
                    <option class="dropdown-item" value="Select Operation">Select Operation</option>
                    <option class="dropdown-item" value="nth-termGM"> Nth term in GM</option>
                </select>
                <br>
            </div>
            <div class="Operation"><button type="button" class="btn btn-dark" id="go-gm">Go -></button></div></div>
         </div >`;
        document.querySelector('#go-gm').addEventListener('click', function Gp_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            let operation_box_series = document.querySelector('.Ap-operation');
            if (operation_box_series.value == 'nth-termGM') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter First Number :- </label>
                <input type="number" id="a" name="salary">
                <br>
                </div>
                <div class="Operation">
                <label class="label">Enter Last Number :- </label>
                <input type="number" id="b" name="salary">
                </div>
                <div class="Operation">
                <label class="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                </div>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let a = parseFloat(document.querySelector('#a').value);
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let b = parseFloat(document.querySelector('#b').value);
                    let result = a*(Math.pow((b/a),((n)/(n+1))));
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The Nth Term in GM = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }
        })
    }
    else if (operation_box.value == 'SPS') {
        series_box.removeChild(div_series_box_child_h2);
        series_box.removeChild(div_series_box_child_div_notice_box);
        series_box.innerHTML = `<h2>Special Power Series</h2>
                <div class="choosing-box-series">
            <h3 style="text-align: center;">Choose Your Operation</h3>
            <div><div class="Operation">
                <label class="label">Enter your Operation:</label>
                <select class="btn btn-light dropdown-toggle Ap-operation" type="button" id="dropdownMenu1 Ap-calc" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" placeholder="Location">
                    <option class="dropdown-item" value="Select Operation">Select Operation</option>
                    <option class="dropdown-item" value="natural">Natural number from 1 to N</option>
                    <option class="dropdown-item" value="square">Square of natural number from 1 to N</option>
                    <option class="dropdown-item" value="Cube">Cube of natural number from 1 to N</option>
                </select>
                <br>
            </div>
            <div class="Operation"><button type="button" class="btn btn-dark" id="go-gm">Go -></button></div></div>
         </div >`;
        document.querySelector('#go-gm').addEventListener('click', function series_calculator(e) {
            e.preventDefault();
            let notice_box = document.querySelector('.notice-parameter-box');
            let h3_child = notice_box.children[0];
            let operation_box_series = document.querySelector('.Ap-operation');
            if (operation_box_series.value == 'natural') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                <br>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let result = ((n)*(n+1))/2;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The sum of first N natural numbers = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'square')
            {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                <br>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let result = ((n)*(n+1)*((2*n)+1))/6;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The sum of square of first N natural numbers = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else if (operation_box_series.value == 'Cube') {
                notice_box.removeChild(h3_child);
                notice_box.innerHTML = `<div class="Operation">
                <label class ="label">Enter Number of terms :- </label>
                <input type="number" id="n" name="salary">
                <br>
                <div class="Operation"><button type="button" class="btn btn-dark go_parameter">Go -->></button></div>`;
                let go_parameter = document.querySelector('.go_parameter');
                go_parameter.addEventListener('click', function evalulation(e) {
                    e.preventDefault();
                    let n = parseFloat(document.querySelector('#n').value);
                    if (Number.isInteger(n) == false) {
                        alert('Number of terms is not valid as it cannot be in fractional number. Page will Reload');
                        location.href = 'sequence_and_series.html';
                    }
                    let result = ((n*n)*(n+1)*(n+1))/4;
                    let result_box = document.querySelector('#result-box');
                    result_box.removeChild(result_box.children[0]);
                    result_box.innerHTML = `<h5>The sum of cubes of first N natural numbers = ${result}</h5><div class="Operation"><a href="sequence_and_series.html"><button type="button" class="btn btn-dark go_parameter">Finish</button></a></div>`
                })
            }
            else {
                alert('Please Select an Option');
            }
        })
    }
})