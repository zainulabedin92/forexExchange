import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFontAwesome, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import './GridDataStyle.css';

type User = {
    firstName:string;
    lastName:string;
    email:string;
    country: string;
    city: string;
    phoneNumber: string;
    active: boolean;
};

type GrdDataProps = {
    dataList: User[];
}

const GridData: React.FC<GrdDataProps> = ({dataList}) => {
    return (
        <>
            <table className="table table-hover table-sm">
            <thead className="bg-dt-header">
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Phone Number</th>
                    <th>Active</th>
                    <th></th>
                </tr>
            </thead>
                <tbody>
                {dataList.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.city}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.active== true?'Yes':'No'}</td>
                        <td>
                            <FontAwesomeIcon icon={faEdit} className="fs-5 me-2 text-success" title="Edit"></FontAwesomeIcon>
                           <FontAwesomeIcon icon={faTrashCan} className="fs-5 me-1 text-primary" title="Delete"></FontAwesomeIcon>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
        </>
    )
}
export default GridData;