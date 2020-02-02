
import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import {Form, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faAt, faUser, faWindowClose, } from '@fortawesome/free-solid-svg-icons'
import git from '../images/git.svg'
import gmail from '../images/gmail.svg'
import codepen from '../images/codepen.svg'

const Email = (props) => {
     useEffect(()=>{
        emailjs.init("user_2RnOkCX40e3RSRmv3GoZw");
     },[])

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message_html, setMessage_html] = useState('')

    let sendEmail = (e)=>{
        e.preventDefault();
        emailjs.send('gmail','template_dVBqPkJv', {name: `${name} email: ${email}`, message_html})
        .then(function(response) {

           console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
           console.log('FAILED...', err);
        });
        setName('')
        setEmail('')
        setMessage_html('')
    }

    function puttingParams(e){
        setName(e.target.value)
    }
    function puttingParams0(e){
        setEmail(e.target.value)
    }
    function puttingParams1(e){
        setMessage_html(e.target.value)
    }

  return (
        <Form style={{

            boxSizing: 'content-box',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px', borderRadius:'5%', padding:'30px', backgroundColor: '#50535e', zIndex: '99'}}>
            <FontAwesomeIcon style={{float:'right',fontSize:'28px',cursor:'pointer', marginBottom:'20px'}} onClick={()=>{
                    props.foo()
                }} icon={faWindowClose} />
            <h5>Send me a message.</h5>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faAt} /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={puttingParams} value={name}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={puttingParams0} value={email}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text><FontAwesomeIcon icon={faCommentAlt} /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl  style={{minHeight: '100px'}} as="textarea" placeholder="Text" onChange={puttingParams1} value={message_html} />
            </InputGroup>
                    <Button style={{minWidth: '275px', marginBottom:'10px'}} variant="dark" onClick={sendEmail}>Send</Button>
                    <a style={{margin:'0 11%'}} target="_blank" href="https://github.com/hatr1ck"><img className='add--hover' height='30px' src={git} /></a>
                    <a style={{margin:'0 11%'}} target="_blank" href="https://www.lhatr1ckl@gmail.com"><img className='add--hover' height='30px' src={gmail} /></a>
                    <a style={{margin:'0 11%'}} target="_blank" href="https://codepen.io/hatr1ck"><img className='add--hover' height='30px' src={codepen} /></a>
            </Form>)
}

export default Email
