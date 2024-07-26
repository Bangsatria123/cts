const Dropdown = () => {
    return (
        <div className="flex justify-center items-center">
            <select className="border-2 border-secondary rounded-md ">
                <option value="" disabled selected>Pilih Kategori</option>
                <option value="teknologi">Teknologi</option>
                <option value="bisnis">Bisnis</option>
                <option value="pendidikan">Pendidikan</option>
                <option value="kesehatan">Kesehatan</option>
                <option value="hiburan">Hiburan</option>
            </select>
        </div>
    )
}
export default Dropdown;