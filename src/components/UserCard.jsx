const usersData = [
    {
      name: "John Doe",
      city: "New York",
      description: "Full Stack Developer",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "React.js"],
      online: true,
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      city: "San Francisco",
      description: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "Angular", "React.js"],
      online: false,
      img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Brown",
      city: "Chicago",
      description: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "SQL", "JavaScript"],
      online: true,
      img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Davis",
      city: "Seattle",
      description: "Software Engineer",
      skills: ["Java", "Spring", "Hibernate", "JavaScript", "React.js"],
      online: false,
      img: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "David Wilson",
      city: "Austin",
      description: "DevOps Engineer",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "JavaScript"],
      online: true,
      img: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];
  
function User(props) {
    return <div className="CardContainer">
        <span className= {props.online ?"pro online":"pro offline"}>{props.online ?"ONLINE" :"OFFLINE" }</span>
        <img src={props.img}alt="user"></img>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="Buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="Skills">
            <h4 > 
                Skills:
            </h4>
            <ul>
                {props.skills.map((skill,index) => <li key={index}>{skill}</li>)}
            </ul>
        </div>
    </div>
}

const UserCard = () => {
    return (
       
            // <User name="Hema" city="villupuram" description="Software Developer" skills={["HTML","CSS","JAVASCRIPT","BOOTSTRAP","REACT.js"]} online={false}/>
     <>
     {usersData.map((user,index) => ( <User key={index} 
     name={user.name}
     city={user.city}
     description={user.description}
     skills={user.skills}
     online={user.online}
     img={user.img}
     
     
     />))}
     </>
    
       
    )
}

export default UserCard
