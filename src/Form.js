import './Form.css';

const Form=()=>{
    return(
        <>
        <div className='container'>
   <div className='nav'>   
Receipt</div>  <div className="sale">
   <spam ><h3>Sale No..00102</h3></spam>     
   </div>
        <span>Date 01-18-2018 12:03:13</span><br/><br></br>
        <table className='table'>
            <tr>
                <th className='contents'>#</th>
                <th className='contents'>products</th>
                <th className='contents'>Quantity</th>
                <th className='contents'>SubTotal</th>

            </tr>
            <tr>
                <td className='contents'>  1</td>
                <td className='contents'>sweater</td>
                <td className='contents'>2</td>
                <td className='contents'>4,000 INR</td>
            </tr><br></br><br></br>
            <tr>
                <td className='contents'>Total </td>
                <td className='contents'>items</td>
                <td className='contents'>2 Total</td>
                <td className='contents'>4,000 INR</td>
            </tr><tr>
                <td className='contents'></td>
                <td className='contents'></td>
                <td className='contents'>Discount</td>
                <td className='contents'>10%</td>
            </tr><tr>
                <td className='contents'></td>
                <td className='contents'></td>
                <td className='contents'>VAT</td>
                <td className='contents'>10%</td>
            </tr>
        </table><br></br><br></br>
        <button className='button'>Close</button>
        </div>
        </>
    )
}
export default Form;