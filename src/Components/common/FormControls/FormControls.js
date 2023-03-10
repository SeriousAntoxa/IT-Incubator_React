import s from "./FormControls.module.css"

const FieldCreator = ({ input, meta, TypeField, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            <div>
                <TypeField {...input} {...props}></TypeField>
            </div>
            {hasError && <span className={s.span}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FieldCreator TypeField="textarea" {...props}></FieldCreator>
}

export const Input = (props) => {
    return <FieldCreator TypeField="input" {...props}></FieldCreator>
}
