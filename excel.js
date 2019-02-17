const express=require('express');
const xlsxtojson=require('xlsx-to-json');
const cors=require('cors');

var app=express();
var port= 3000;

app.use(cors());



app.get('/', (req,res)=>{
    xlsxtojson({
        input:"Attendence Sheet.xlsx",
        output:'output.json',
        sheet:'Sheet1'
    },(err,result)=>{

        if(err){
            res.json(err)
        }
        else{
            
    res.send(result);
            
        }
    });



});




app.listen(port,()=>{
    console.log('App is listening');
});