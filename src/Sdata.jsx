import web from '../src/images/web.jpg';
import android from '../src/images/android.jpg';
import data from '../src/images/data.jpg';
import AI from '../src/images/AI.jpg';
import python from '../src/images/python.jpg';
import robotics from '../src/images/robotics.jpg';
import AR from "../src/images/Ar and vr.jpg";
import digital from "../src/images/digital.jpg";
import java from "../src/images/java.jpg";
import databook from "../src/E-book/Data-Structures-and-Algorithms-Made-Easy-Data-Structures-and-Algorithmic-Puzzles.pdf"
import webbook from "../src/E-book/webbook.pdf";
import appbook from "../src/E-book/Android App Development.pdf";
import Arvr from "../src/E-book/Ar and VR.pdf";
import Digitalbook from "../src/E-book/Digital Marketing.pdf";
import javabook from "../src/E-book/Java.pdf";
import robobook from "../src/E-book/robotics.pdf";
import AIbook from "../src/E-book/AI.pdf";

const Sdata=[
    {
        src:web,
        title:"Web Developement",
        link:"https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
        book:webbook,
       
    },
    {
        src:android,
        title:"Android Developement",
        link:"https://bit.ly/2E8Hyzg",
        book:appbook,
    },
    {
        src:data,
        title:"Data structures",
        link:"https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
        book:databook,
    },
    {
        src:AI,
        title:"Artificial Intelligence",
        link:"https://www.youtube.com/watch?v=uB3i-qV6VdM&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI",
        book:AIbook,
    },
    {
        src:python,
        title:"Python Programming",
        link:"https://www.youtube.com/watch?v=aqvDTCpNRek&list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",
        book:"http://www.davekuhlman.org/python_book_01.pdf",
    },
    {
        src:robotics,
        title:"Robotics",
        link:"https://www.youtube.com/watch?v=pwwVOpXrazs&list=PL4g1oAdmuCfqmYvURLzVFkMMUI7839biN",
        book:robobook,
    },
    {
        src:AR,
        title:"Augmented Reality and Virtual Reality",
        link:"https://www.youtube.com/watch?v=2Vu_lEYgkyQ&list=PL_Nji0JOuXg0tJ-HQ8g0OgEjIxL5RO1R2",
        book:Arvr
    },
    {
        src:java,
        title:"Java Programming",
        link:"https://www.youtube.com/watch?v=WOUpjal8ee4&list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK",
        book:javabook,
    },
    {
        src:digital,
        title:"Digital Marketing",
        link:"https://www.youtube.com/watch?v=zdi5hEDNmzY&list=PLd9tDukllEepYrfX-zy6NLbLRmHdPsukE",
        book:Digitalbook,
    },
];
export default Sdata;