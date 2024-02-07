import { useStaffContext} from "../hooks/useStaffContext"

const StaffDetails = ({ staff}) =>{
    const { dispatch } = useStaffContext()


    //delete project
    const handleClick = async () => {
        const response = await fetch('/api/staff/' + staff._id, {
            method: 'DELETE'
        }) 
        const json = await response.json()

        if (response.ok) {
            
            dispatch({type: 'DELETE_STAFF', payload: json})
        }


}

    return(
        <div className="project-details">
            <h4>{staff.name}</h4>
            <p><strong>ID-</strong>{staff.staffid}</p>
            <p><strong>Address     -</strong>{staff.address}</p>
            <p><strong>Description -</strong>{staff.contact}</p>
            {/* <p>{formatDistanceToNow(new Date(project.CreatedAt), { addSuffix: true })}</p> */}
            {/* <span className="material-symbols-outlined" onClick={handleEdit}>Edit</span> */}
            <span className="material-symbols-outlined" onClick={ handleClick }>Delete</span>
        </div>
    )
}

    export default StaffDetails