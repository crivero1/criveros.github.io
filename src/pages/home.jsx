import Description from '../information/general_description.json';
import Topics from '../information/research-section.json'
import Projects from '../information/projects-section.json'
import Courses from '../information/courses-section.json'
import Box from '../components/box';
import BoxResearch from '../components/boxResearch';
import Foto from '../assets/profile_2.jpg'

function parser(text){
    // const listToParse = text.split(";");
    // console.log(listToParse);
    return (
        <>
        {text.map(line => (
              <p className="text-left text-body">
                  {line}
              </p>
          ))}
        </>
    )
}

function listToBoxes(listOfParams, color, bold_color){
    // console.log(listOfParams);
    return (
        <>
            {listOfParams.map(elem => 
            // {
                (
                <BoxResearch obj={elem} color={color} bold_color={bold_color} border_shape=''/>
            )
            // , console.log(elem)
            // }
            )}
        </>
    )
}

export default function HomePage() {
    return(
        <>
            <div className="mt-10">
                <div className="md:grid md:grid-cols-2 ">
                    {/* <Box title='Cristian Riveros' list={Description['who-i-am'][0]} color='bg-white' border_shape='rounded-xl'/> */}
                    <div className={`m-2 bg-neutral-primary-soft flex flex-col p-5 border border-transparent justify-start bg-white rounded-xl`}>
                        <div className="pb-2 text-3xl text-left font-medium text-gray-600">
                            Cristian Riveros
                        </div>
                        <div className='flex flex-col items-center lg:flex-row'>
                            <img className="md:size-28 md:m-5 size-24 m-2 rounded-full object-contain" src={Foto} alt="Profile picture"/>
                            <div className="text-justify text-body my-3">
                                {Description['who-i-am'][0]['description']}
                            </div>
                        </div>
                    </div>
                    {/* <Box title='Personal information' list={Description['information'][0]} link={Description['information'][1]} color='bg-gray-1' border_shape='rounded-xl'/> */}
                    <div className={`m-2 bg-neutral-primary-soft flex flex-col p-5 border border-transparent content-around justify-start content-between bg-gray-1 rounded-xl`}>
                        <div 
                        className="text-2xl text-left font-medium text-gray-600"
                        >
                            Personal information
                        </div>
                        <div className='flex-1'>
                            <p className="text-left my-3 text-left">
                                {Description['information'][0]['affiliation']}
                            </p>
                            <div>
                                {parser(Description['information'][0]['address'])}
                            </div>
                            <div>
                                <p className="text-body text-left my-3">
                                    {Description['information'][0]['phone']}
                                </p>
                            </div>
                            <div className="text-left text-body text-blue-1 my-3">
                                <a href={`mailto:${Description['information'][0]['email']}`}>{Description['information'][0]['email']}</a>
                            </div>
                            <div className="text-left text-body my-3">
                                See:
                                &nbsp;
                                <a href={Description['information'][1]['dblp-link']} className='mt-2 text-right font-light text-blue-1'>
                                dblp, 
                                </a>
                                &nbsp;
                                <a href={Description['information'][1]['scholar-link']} className='mt-2 text-right font-light text-blue-1'>
                                Google Scholar, 
                                </a>
                                &nbsp;
                                <a href={Description['information'][1]['linkedin-link']} className='mt-2 text-right font-light text-blue-1'>
                                LinkedIn, 
                                </a>
                                &nbsp;
                                <a href={Description['information'][1]['uc-link']} className='mt-2 text-right font-light text-blue-1'>
                                UC
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 ">
                    {<Box title='Research' list={Topics['information'][0]} color='bg-blue-3' border_shape='rounded-xl'/>}
                    {listToBoxes(Topics['research-topics'], 'bg-blue-3', 'black')}
                    {/* {listToBoxes(Projects['projects-topics'], 'bg-gray-1')} */}
                </div>
                <div className="md:grid md:grid-cols-2 ">
                    {<Box title='Projects' list={Projects['information'][0]} color='bg-gray-1' border_shape='rounded-xl'/>}
                    {listToBoxes(Projects['projects-topics'], 'bg-gray-1', 'text-blue-1')}
                </div>
                <div className="md:grid md:grid-cols-2 ">
                    {listToBoxes(Courses['courses'], '', 'text-blue-1')}
                </div>
            </div>
        </>
    )
}