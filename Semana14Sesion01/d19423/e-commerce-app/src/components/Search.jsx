import Form from 'react-bootstrap/Form';
export default function Search({label, onClick}){
    
    return( 
    <>

      
        <Form.Control type="text" placeholder={label} onKeyUp={onClick}/>
            




      </>
      )
}