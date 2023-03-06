import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

function App(){
  return(
    <div>
      <Cards/>
    </div>
  )
}
export default App
const list=[
  {  id: "1",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Fancy Product',
    rate:'$40.00 - $80.00',   
  },
  { id: "2",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Special Item',
    rate:'$40.00 - $80.00',   
  },
  { id: "3",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Sale Item',
    rate:'$40.00 - $80.00',   
  },
  { id: "4",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Popular Item',
    rate:'$40.00 - $80.00',   
  },
  { id: "5",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Bag',
    rate:'$40.00 - $80.00',   
  },
  { id: "6",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Makeup Item',
    rate:'$40.00 - $80.00',   
  },
  { id: "7",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Most Selling Item',
    rate:'$40.00 - $80.00',   
  },
  { id: "8",
    img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    product:'Children Item',
    rate:'$40.00 - $80.00',   
  }
]

function Cards(){
  const [count,setCount]=useState(0)

const addfnc=(product,rate)=>{
  console.log('clicked add')
  setCount(count+1)
  var tempproduct=product;
  var temprate=rate;
  console.log(tempproduct, temprate);
  document.getElementById(tempproduct).disabled = true;
 document.getElementById(temprate).disabled = false;
}

const deletefnc=(product,rate)=>{
  if(document.getElementById(product).disabled === true){
  console.log('deleting')
  
  setCount(count-1)
  var tempproduct=product;
  var temprate=rate;
  console.log(tempproduct, temprate);
  document.getElementById(tempproduct).disabled = false;
 document.getElementById(temprate).disabled = true;
  }
}

  return(
    <div className='bar'>
      <nav>
       <Button className='bar-btn' variant="text">Home</Button>
        <Button className='bar-btn' variant="text">About</Button>
       <Button className='bar-btn' variant="text">Shop</Button>         
       {/* <Button className='bar-btn' variant="text" >Cart - {count}</Button> */}
       <IconButton color="primary"><ShoppingCartIcon></ShoppingCartIcon>{count}</IconButton></nav>
       

    <div className="item">
      {list.map((value,index)=>(
      <div className="items" key={index}>
            <img src={value.img} alt={value.product} ></img>
           < div className="bodyyy">
             <h1>{value.product}</h1>
            <h3>{value.rate}</h3>

            <Button className="btnnn" id={value.product} 
            onClick={()=>addfnc(value.product,value.rate)}>
              Add to Cart</Button>

            <Button className="btnnn"  id={value.rate}
             onClick={()=>deletefnc(value.product,value.rate)}>
              Remove from Cart</Button> </div>
      </div>
))}
      
      </div>      
        </div>
  )
}




