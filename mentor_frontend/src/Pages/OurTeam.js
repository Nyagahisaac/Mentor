import React, { useEffect, useState} from 'react'
import { Form, Collapse } from 'react-bootstrap'
import { Link } from 'react-scroll'
import homeIcon from '../images/icons/homevector.svg'
import WhiteHeader from '../Navigation/WhiteHeader'


const our_team =[
    {
        'id':'1',
        'name':'Anthony Kamau',
        'designation':'Board Chairman',
        'image':'../OurTeam/anthony.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'2',
        'name':'Robert Kibe',
        'designation':'Designation',
        'image':'../OurTeam/robert.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'3',
        'name':'Clement Kamau',
        'designation':'Designation',
        'image':'../OurTeam/clement.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'4',
        'name':'Julius Kagiri',
        'designation':'Designation',
        'image':'../OurTeam/julius.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'5',
        'name':'Francis Njoroge',
        'designation':'Designation',
        'image':'../OurTeam/francis.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'6',
        'name':'Joyce Ndegwa',
        'designation':'Designation',
        'image':'../OurTeam/joyce.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'7',
        'name':'James Kiago',
        'designation':'Designation',
        'image':'../OurTeam/james.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
    {
        'id':'8',
        'name':'John Mwaniki',
        'designation':'Designation',
        'image':'../OurTeam/john.jpeg',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc.',
        'more':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem non auctor facilisi adipiscing iaculis sit amet suspendisse nisl. Gravida semper a maecenas ultricies tempor elementum in dolor nunc. Purus faucibus sollicitudin scelerisque molestie ipsum, adipiscing. Sem ipsum ipsum a vulputate quis. Elit convallis amet nunc amet nunc. '
    },
]




function OurTeam() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
        <WhiteHeader />
     <div className="line"></div>
     <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
       <ol className="breadcrumb">
         <img
           src={homeIcon}
           alt=""
           style={{ marginRight: 5, width: "20px", height: "20px" }}
         />
         <li className="breadcrumb-item">
           <a href="/" className="breadcrumb-item-override">
             Home
           </a>
         </li>
         
         <li className="breadcrumb-item active" aria-current="page">
           <span className="breadcrumb-item-override-active">
             Our Team
           </span>
         </li>
       </ol>
     </nav>
     <div className="line"></div>


        <div className="container py-3">
            <h1 className='py-3 px-5' id="subheader">Meet Our Team</h1>
            {our_team.map(member =>(
            <div key={member.id} className="row justify-content-center py-3">
                <div className="col-11 col-md-3">
                    <img src={member.image} className="img-fluid" alt=""></img>
                </div>
                
                <div className="col-11 col-md-8">
                    <strong><p>{member.name}</p></strong>
                    <strong><p className="grey">{member.designation}</p></strong>
                    <p>{member.description}</p>
                    <Link
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="green"
                    >
                        Read more
                    </Link>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                        <p>{member.more}</p>
                        </div>
                    </Collapse>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default OurTeam
