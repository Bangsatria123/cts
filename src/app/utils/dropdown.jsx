const Dropdown = ({value, q,w,e,r}) => {
    return (
        <div className="flex w-full justify-center items-center">
            <select className="border-2 border-secondary rounded-md px-7 py-2 ">
                <option value="" disabled selected>{value}</option>
                <option value={q}>{q}</option>
                <option value={w}>{w}</option>
                <option value={e}>{e}</option>
                <option value={r}>{r}</option>
                
            </select>
        </div>
    )
}
export default Dropdown;