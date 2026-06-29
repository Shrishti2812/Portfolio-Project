function Navbar(){
    return(
<>
<div className="flex  justify-between items-center h-16 bg-gray-800 text-white px-4">
    <div className="text-lg font-bold">Shrishti Gupta</div>
    <div className="flex justify-between space-x-10">
        <section className="hover:text-gray-400">Home</section>
        <section className="hover:text-gray-400">About</section>
        <section className="hover:text-gray-400">Contact</section>
    </div>
</div>

</>
    )
}
export default Navbar;