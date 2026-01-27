import Icon from '../components/Icon'

function LoginPage() {
    return (
        <>
            <div className="border-[.5px] border-gray-400 w-fit mx-auto mt-[20vh] pt-5 pb-15 px-9 rounded-2xl bg-white">
                <Icon width={300} height={100} />
                <form className="mt-2">
                    <div>
                        <div>
                            <label className="bg-gray">Email</label>
                            <br></br>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="border-gray-300 border-1 bg-[#f7f5f4] w-[100%] mt-[1vh] py-3 px-4 rounded-2xl mb-[2vh] focus:outline-none" 
                                required    
                            ></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <br></br>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="border-gray-300 border-1 bg-[#f7f5f4] w-[100%] mt-[1vh] py-3 px-4 rounded-2xl focus:outline-none"
                                required
                            ></input>
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Continue →"
                                className="border-black border-1 bg-[#fae150] w-[100%] mt-[4vh] py-3 px-3 rounded-2xl cursor-pointer hover:bg-[#fae150]/80 active:bg-[#fae150]"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage