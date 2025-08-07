import React, { useEffect, useState } from 'react'
import brandimg from "../assets/images/icon-brand-recognition.svg"
import detailedimg from "../assets/images/icon-detailed-records.svg"
import fullyimg from "../assets/images/icon-fully-customizable.svg"

// https://tinyurl.com/api-create.php?url=YOUR_URL

const Input = () => {

        // get links and original link from localstorage
    const getStoredLink=()=>{
       let storedLinks=localStorage.getItem("linkHistory")
       if(storedLinks){
        return JSON.parse(storedLinks)
       }else{
        return []
       }
    }
    

    // State for storing multiple links
    const [linkHistory, setLinkHistory] = useState(getStoredLink())

    // to store the input and error if any while validating 
    const [input,setInput]=useState('')
    const [error,setError]=useState('')
    console.log(input)
    //stored the shorten and original (fetched api) here
    const [link,setLink]=useState('') 
    //    to Copy the shorten link
    const [copy,setCopy]=useState(null)


//    input(link) validation
   const handleSubmit=(e)=>{
        e.preventDefault()
        
        // use for the link validation
        const linkRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

        if(!input){
          setError("please enter a link")
        }else if(!linkRegex.test(input)){
            setError('invaild link')

        }else{
            // if all conditional statement was ignore then run
            // fetching the shorten link from the dynamic route(api)
            const shortenLink= async()=>{
              try {
                  const res = await fetch(`https://tinyurl.com/api-create.php?url=${input}`)
                  const data = await res.text()

                //   
                    const newLink = {
                    id: Date.now(), 
                    original: input,
                    shortened: data,
                }


                // Update state with new link
                const updatedHistory = [newLink, ...linkHistory].slice(0,3)
                setLinkHistory(updatedHistory)
                // setLink(data)
                // setError('')
                // setInput('') 


                
              } catch (error) {
                if(!data){
                return ({error:'link not found'})};
              }
            }
            
            // run the function 
            shortenLink()
            setInput('')
            setError('')}
     
   }

//    handle copy to clipboard
   const handleCopy = (id, shortenLink)=> {
    try {
        navigator.clipboard.writeText(shortenLink)
        setCopy(id)
        setTimeout(() => setCopy(''), 2000)
    } catch (error) {
        console.log(error)
    }
}



    
        // store shorten links in local storage
    useEffect(()=>{
        if(linkHistory){
        localStorage.setItem("linkHistory", JSON.stringify(linkHistory))
        console.log('1234')};
        
    },[linkHistory])




  return (
    <div className=' bg-[hsl(0,0%,75%)] mt-25'>
        <div className='container mx-auto w-11/12 space-y-10 pb-10 relative '>
            <div className='input px-5 py-7  md:py-10 bg-[hsl(257,27%,26%)] rounded-md relative top-[-90px] md:top-[-60px] left-[50%] -translate-x-1/2 w-full' >
            {/* the link form */}
                <form action="post" onSubmit={handleSubmit} className='input flex md:flex-row flex-col gap-8 md:gap-3 relative'>
                    <input type="text" placeholder='Shorten a link here..' className={` ${error ? 'border-red-500' : 'border-green-200'} ${error ? 'placeholder-red-500' : 'placeholder-gray-400'} border-2 py-3 pl-3 text-gray-800 text-[12px] md:text-[18px] bg-white rounded-md md:w-[75%] outline-none focus:text-black`} value={input} onChange={(e)=>setInput(e.target.value)} />
                    <p className='absolute font-semibold text-red-500 top-[45px] md:top-[55px] left-0 italic md:text-[16px] text-[14px] '>{error}</p>
                    <button className={`bg-[hsl(180,66%,49%)] text-[18px] py-2 md:py-3 text-white font-semibold rounded-md md:w-[25%] hover:bg-[hsla(180,66%,67%,1.00)] cursor-pointer hover:text-[18.5px] `} onClick={handleSubmit}>Shorten it!</button>
                </form>
           </div>

        <div className='relative top-[-100px] md:top-[-70px]  left-[50%] -translate-x-1/2'>
            {/*mapped through fetched shorten links from linkHistory */}
            {
                linkHistory && linkHistory.map((link)=>(
                    <div key={link.id} className='px-3 py-1 flex md:flex-row flex-col bg-white mt-10 md:mt-5 md:justify-between md:text-balance md:items-center rounded-md'>
                    <p className='px-3 py-2 w-full md:w-[70%] overflow-hidden text-cente md:text-start'>{link.original}</p>
                    {/* the thin horizontal line on mobile */}
                    <div className='border border-gray-500 w-full md:hidden'></div>
                    <div className='flex flex-col py-2 md:flex-row items-center'>
                        <p className='px-3 py-1 text-[hsl(180,66%,49%)] font-semibold text-[16px]'>{link.shortened}</p>
                    <button style={{background:copy == link.id ?'hsl(257,27%,26%)':'hsl(180,66%,49%)'}} className=' text-white w-full p-2 md:px-8 font-semibold bg-[hsl(180,66%,49%)] rounded-md hover:bg-[hsl(180,66%,77%)] cursor-pointer' onClick={()=>handleCopy(link.id, link.shortened)}>{copy===link.id?'Copied!':'copy'}</button>
                    </div>
                </div>
                ))
               
            
            }
            

        </div>


            {/* Advanced stats section */}
            <div className='pb-20'>
                {/* header/paragraphy*/}
                <div className='pt-4 pb-10 text-center flex flex-center flex-col items-center justify-center gap-4 md:gap-2'> 
                    <h2 className='text-[hsl(260,8%,14%)] font-semibold text-[25px] text-center'>Advanced Statistics</h2>
                    <p className='text-gray-500 text-balanced px-2 md:px-20 text-[16px] sm:text-[20px]'>Track how your links are performing across the web with our 
                    advanced statistics dashboard.</p>
                </div>

                {/* directory details */}
                <div className='relative flex'>
                    {/* the green vertical line (mobile screen)*/}

                    <div className='w-[8px] min-h-[80%] bg-[hsl(180,66%,49%)] absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-2 md:hidden'></div>
                   
                    {/* the green horizantal line (desktop screen)*/}
                    <div className='h-[8px] min-w-[80%] bg-[hsl(180,66%,49%)] absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-2 hidden md:flex'></div>

                    {/* box1,2,3 */}
                            <div className='flex flex-col md:grid md:grid-cols-3 gap-14 md:gap-5 pt-10 z-3'>
                                {/* box 1 */}
                                <div className='flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative'>
                                    <span className='absolute top-[-30px] md:top-[-40px] md:left-[30px]'><img src={brandimg} alt="" className='bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20' /></span>
                                    <h2 className='text-[hsl(257,27%,26%)] md:text-[20] text-[18px] font-semibold md:self-start'>Brand Recognition</h2>
                                    <p className='text-gray-500 text-[15px] md:text-[18px]'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                    </p>
                                </div>


                                {/* box 2 */}
                                <div className='flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative md:top-8'>
                                    <span className='absolute top-[-30px] md:top-[-40px] md:left-[30px]'><img src={detailedimg} alt="" className='bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20' /></span>
                                    <h2 className='text-[hsl(257,27%,26%)] md:text-[20] text-[18px] font-semibold md:self-start'>Detailed Records</h2>
                                    <p className='text-gray-500  text-[15px] md:text-[18px]'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                    </p>
                                </div>

                                {/* box 3 */}

                                <div className='flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative md:top-15'>
                                    <span className='absolute top-[-30px] md:top-[-40px] md:left-[30px]'><img src={fullyimg} alt="" className='bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20' /></span>
                                    <h2 className='text-[hsl(257,27%,26%)] text-[18px] md:text-[20] font-semibold md:self-start'>Fully Customizable</h2>
                                    <p className='text-gray-500 text-[15px] md:text-[18px]'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                    </p>
                                </div>
                            </div>
                </div>
            </div>
        </div>

        {/* Section before the footer */}
        <div className='boost-section bg-[hsl(257,27%,26%)] text-white text-center font-semibold py-18 space-y-2'>
                <div className='container mx-auto w-11/12 space-y-3'>
                    <h2 className='text-[28px]'>Boost your links today</h2>
                <button className='bg-[hsl(180,66%,49%)] py-2 px-10 rounded-full text-[20px] hover:bg-[hsla(180,66%,67%,1.00)] cursor-pointer hover:text-[20.5px]'>
                Get Started
                </button>
                </div>
        </div>
    </div>
  )
}

export default Input
