var state={
    'start':0
}
var myList=[
    {
        'productName':'CNC',
        'description':'this is new product',
        'price':'3000',
        'unit':'kg'
    },
    {
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'OldCNC2',
        'description':'Required for processing',
        'price':'3500',
        'unit':'g'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'ASDCNC4',
        'description':'Always required',
        'price':'9000',
        'unit':'g'
    },{
        'productName':'RedCNC5',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'PPCNC7',
        'description':'Extremly important',
        'price':'3070',
        'unit':'kg'
    },{
        'productName':'CNC8',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'CNC9',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'ASDCNC4',
        'description':'Always required',
        'price':'9000',
        'unit':'g'
    },
    {
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'PPCNC7',
        'description':'Extremly important',
        'price':'3070',
        'unit':'kg'
    },{
        'productName':'ASDCNC4',
        'description':'Always required',
        'price':'9000',
        'unit':'g'
    },{
        'productName':'CNC14',
        'description':'asdfg',
        'price':'13000',
        'unit':'kg'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'CNC17',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'PPCNC7',
        'description':'Extremly important',
        'price':'3070',
        'unit':'kg'
    },{
        'productName':'ASDCNC4',
        'description':'Always required',
        'price':'9000',
        'unit':'g'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'CNC22',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'CNC23',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'CNC25',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'PPCNC7',
        'description':'Extremly important',
        'price':'3070',
        'unit':'kg'
    },{
        'productName':'ASDCNC4',
        'description':'Always required',
        'price':'9000',
        'unit':'g'
    },{
        'productName':'CNC28',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'CNC29',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NewCNC1',
        'description':'Expensive Product',
        'price':'5000',
        'unit':'kg'
    },{
        'productName':'CNC31',
        'description':'asdfg',
        'price':'3000',
        'unit':'kg'
    },{
        'productName':'NextCNC3',
        'description':'Need of this is heigh',
        'price':'3000',
        'unit':'kg'
    }
]
function render(index){
    console.log("rendering")
    var newName=myList[0].Fistname;
    var newRow = document.createElement("tr");
    var newCell1 = document.createElement("td");
    var newCell2 = document.createElement("td");
    var newCell3 = document.createElement("td");
    var newCell4 = document.createElement("td");
    newCell1.innerHTML=myList[index].productName;
    newCell2.innerHTML=myList[index].description;
    newCell3.innerHTML=myList[index].price;
    newCell4.innerHTML=myList[index].unit;
    newRow.append(newCell1);
    newRow.append(newCell2);
    newRow.append(newCell3);
    newRow.append(newCell4);
    document.getElementById("rows").appendChild(newRow);


}

function clickOne(){
    document.getElementById("rows").innerHTML = "";

    state.start=0;
    var end=(12<myList.length?12:myList.length)
    for(var i=state.start;i<end;i++) {
        render(i);
    }

}
function clickTwo(){
    document.getElementById("rows").innerHTML = "";


    state.start=12;
    var end=(12<myList.length-12?state.start+12:myList.length)
    for(var i=state.start;i<end;i++) {
        render(i);
    }

}

function clickThree(){
    document.getElementById("rows").innerHTML = "";


    state.start=24;
    var end=(12<myList.length-12?state.start+12:myList.length)
    for(var i=state.start;i<end;i++) {
        render(i);
    }

}
clickOne()
