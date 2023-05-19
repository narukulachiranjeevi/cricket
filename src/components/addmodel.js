import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Forminput from './form';
import Form from 'react-bootstrap/Form';
function Model(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState();
    const [team, setTeam] = useState();
    const [mat, setMat] = useState();
    const [runs, setRuns] = useState();
    const [Hs, setHs] = useState();
    const [Avg, setAvg] = useState();
    const [st, setSt] = useState();
    const [fours, setFours] = useState();
    const [sixes, setSixes] = useState();
    const [overs, setOvers] = useState();
    const [wickets, setWickets] = useState();
    const [bbl, setBbl] = useState();
    const [eco, setEco] = useState();
    const [fourwickets, setFourwickets] = useState();
    const [fivewickets, setFivewickets] = useState();
    const [img, setImg] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const addPlayer = ()=> {
        const player = {
            name:name,
            role:role,
            team:team,
            mat:mat,
            runs:runs,
            Hs:Hs,
            Avg:Avg,
            st:st,
            fours:fours,
            sixes:sixes,
            overs:overs,
            wickets:wickets,
            bbl:bbl,
            eco:eco,
            fourwickets:fourwickets,
            fivewickets:fivewickets,
            img:img
        }
        console.log(player);
        const reqoptions = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(player)
        }
        fetch('http://localhost:3005/addplayers',reqoptions)
        .then(res=>res.json())
        .then(data=>console.log(data.status()))
    }

  return (
    <>
        <button onClick={handleShow} className="block m-20 mx-auto px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add Player</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form id="playerdetails"
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    addPlayer();
                    console.log('inside add player'+' '+team+' '+role+' '+img);
                }
            }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" placeholder="Enter Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                        console.log(name);
                    }
                }
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" placeholder="Enter Img Url" 
                    onChange={(e)=>{
                        setImg(e.target.value);
                    }
                }
                 />
            </Form.Group>

            <Form.Select size="sm" className="mb-3" controlId="team" onChange={(e)=>setTeam(e.target.value)}>
                <option>Open this select Team</option>
                <option value='CSK'>CSK</option>
                <option value='Dc'>DC</option>
                <option value='KKR'>KKR</option>
                <option value='MI'>MI</option>
                <option value='PBKS'>PBKS</option>
                <option value='RCB'>RCB</option>
                <option value='RR'>RR</option>
                <option value='SRH'>SRH</option>
                <option value='LSG'>LSG</option>
                <option value='GT'>GT</option>
            </Form.Select >

            <Form.Group className="mb-3" controlId="role">
                <Form.Control 
                    type="text" 
                    placeholder="Enter Role"
                    onChange={(e)=>{
                        setRole(e.target.value);
                        console.log(name);
                    }
                } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mat">
                <Form.Control 
                    type="text" 
                    placeholder="Enter Number of Matches Played"
                    onChange={(e)=>{
                        setMat(e.target.value);
                        console.log(name);
                    }
                }
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="runs">
                <Form.Control 
                    type="number" 
                    placeholder="Enter Scored Runs" 
                    onChange={(e)=>{
                        setRuns(e.target.value);
                        console.log(name);
                    }
                }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Hs">
                <Form.Control 
                    type="number" 
                    placeholder="Enter Highest Score"
                    onChange={(e)=>{
                        setHs(e.target.value);
                        console.log(name);
                    }
                } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="st">
                <Form.Control 
                    type="number" 
                    placeholder="Enter StrikeRate"
                    onChange={(e)=>{
                        setSt(e.target.value);
                        console.log(name);
                    }} 
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fours">
                <Form.Control 
                    type="number" 
                    placeholder="Enter Number Fours"
                    onChange={(e)=>{
                        setFours(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="sixes">
                <Form.Control 
                    type="number" 
                    placeholder="Enter Number of Sixes"
                    onChange={(e)=>setSixes(e.target.value)}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="overs">
                <Form.Control 
                    type="number" 
                    placeholder="Enter Number of Overs Bowled"
                    onChange={(e)=>setOvers(e.target.value)} 
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wickets">
                <Form.Control type="number" 
                    placeholder="Enter Number Wickets Taken"
                    onChange={(e)=>setWickets(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bbl">
                <Form.Control type="text" 
                    placeholder="Enter Best Bowling"
                    onChange={(e)=>setBbl(e.target.value)}
                     />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avg">
                <Form.Control type="number" 
                    placeholder="Enter Average"
                    onChange={(e)=>setAvg(e.target.value)}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eco">
                <Form.Control type="number" 
                placeholder="Enter Economy"
                onChange={(e)=>setEco(e.target.value)} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fourwickets">
                <Form.Control type="number" 
                    placeholder="Enter taken Fourwickets"
                    onChange={(e)=>setFourwickets(e.target.value)}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fivewickets">
                <Form.Control type="number" 
                    placeholder="Enter taken Fivewickets"
                    onChange={(e)=>setFivewickets(e.target.value)}
                    />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button variant="primary" onClick={handleClose} form='playerdetails'>Add Player</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;