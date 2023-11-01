import classses from "./MembersTable.module.css";

const MembersTable = (props) => {
  return (
    <>
      {props.members.length === 0 && <p>Members list empty</p>}
      {props.members.length !== 0 && (
        <div className={classses["members-container"]}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {props.members.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MembersTable;
