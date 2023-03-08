import React, { useEffect, useState } from "react"

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    /*componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevState.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }*/

    const enableEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const disableEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            <p>My status: </p>
            {!editMode && (
                <div>
                    <span onDoubleClick={enableEditMode}>
                        {status || "no status"}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        autoFocus={true}
                        onBlur={disableEditMode}
                        onChange={onStatusChange}
                        defaultValue={status}
                    />
                </div>
            )}
        </div>
    )
}

export default ProfileStatus
