import React,{useState} from 'react'

export const Crud = () => {
    const [user, setuser] = useState({name:"",salary:"",email:"",number:"",qualification:"",gender:"",desig:"",language:""})

    const handleChange = (e)=>{
      var newVal = {...user}
      newVal[e.target.name]= e.target.value
    //   console.log(newVal)
      setuser(newVal)

    }
    const addUser = (e)=>{
        console.log(user)
    }
    return (
        <div>
            <form > 
                <tr>
               <td> <label htmlFor="name"> Employee Name <span style={{color:"red"}}>*</span> : </label></td>
                <td><input type="text" name="name" id="name"  value={user.name} onChange={(e)=>{handleChange(e)}}/> <br /><br /></td>
                </tr>
                <tr>
               <td> <label htmlFor="salary" > Salary <span style={{color:"red"}}>*</span> : </label></td>
                <td><input type="number" name="salary" id="salary" value={user.salary} onChange={(e)=>{handleChange(e)}}/> <br /><br /></td>
                </tr>
               <tr>
                <td><label htmlFor="email" > Email <span style={{color:"red"}}>*</span> : </label></td>
               <td><input type="email" name="email" id="email" value={user.email} onChange={(e)=>{handleChange(e)}} /> <br /><br /></td>
               </tr>
               <tr>
                <td><label htmlFor="number" > Mobile <span style={{color:"red"}}>*</span> : </label></td>
                <td><input type="number" name="number" id="number" value={user.number} onChange={(e)=>{handleChange(e)}}/> <br /><br /></td>
                </tr>
               <tr>
                   <td><label htmlFor="desig">Designation<span style={{color:"red"}}>*</span> : </label></td>
                   <td><select name="desig" id="desig"  value={user.desig}>
                       <option value="" ></option>
                       <option value="" >Manager</option>
                       <option value="" >Software Developer</option>
                       <option value="" >Software Tester</option>
                       <option value="">Admin</option>
                       </select> <br /> <br /><br /></td>
               </tr>
               <tr>
               <td> <label htmlFor="qualification" > Qualification <span style={{color:"red"}}>*</span> : </label></td>
                <td><input type="text" name="qualification" id="qualification" value={user.qualification} onChange={(e)=>{handleChange(e)}} /> <br /> <br /></td>
                </tr>
                <tr>
                <td><label htmlFor="gender" > Gender<span style={{color:"red"}}>*</span> : </label></td>
                <td><input type="gender" name="gender" id="gender" value={user.gender} onChange={(e)=>{handleChange(e)}}/> <br /><br /></td>
                </tr> <br />
               <tr>
                   <td><label htmlFor="language">Languages Known <span style={{color:"red"}}>*</span>:</label></td>
                   {/* <td>telugu<input type="checkbox"  value={user.language}/></td> */}
               </tr>     
               <br /><br />
                <button type="button" onClick={(e)=>{addUser(e)}}>Submit</button>
            </form>
        </div>
    )
}
export default Crud