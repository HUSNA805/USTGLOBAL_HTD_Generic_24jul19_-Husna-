let tableEle = document.createElement('table');
let tr1 = document.createElement('tr');
let td1 = document.createAttribute('td');
let td2 = document.createAttribute('td');
let tr2 = document.createElement('tr');
let td3 = document.createAttribute('td');
let td4 = document.createAttribute('td');
let tr3 = document.createElement('tr');
let td5 = document.createAttribute('td');
let td6 = document.createAttribute('td');
let tr4 = document.createElement('tr');
let td7 = document.createAttribute('td');
let td8 = document.createAttribute('td');
let table = document.getElementById('tableid').innerHTML=`<table>
                            <tr>
                                <td> name </td>
                                <td> Age </td>
                            </tr>
                            <tr>
                            <td> dinga </td>
                            <td> 23 </td>
                        </tr>
                        <tr>
                                <td> suman </td>
                                <td> 24 </td>
                            </tr>
                            <tr>
                                <td> dingi </td>
                                <td> 20 </td>
                            </tr>
                              </table>`;
table.classlist = '.tab';

