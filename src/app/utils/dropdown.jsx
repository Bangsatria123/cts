



const Dropdown = ({value, q,w,e,r, padd}) => {
    return (
        <div className="flex w-full 
        sm:items-start md:items-center lg:items-center
        sm:justify-start md:justify-center lg:justify-center">
            <select className={`border-2 border-secondary rounded-md ${padd} md:w-1/2 lg:w-1/2 `}>
                <option value="" disabled selected className="justify-center items-center flex">{value}</option>
                <option value={q}>{q}</option>
                <option value={w}>{w}</option>
                <option value={e}>{e}</option>
                <option value={r}>{r}</option>
                
            </select>
        </div>
    )
}
export default Dropdown;