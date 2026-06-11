import Students from '../information/students.json';
import boxStudents from '../components/boxStudents';

export default function StudentsPage() {
    return(
        <>
        <div className="mt-10">
            <div className="md:grid md:grid-cols-2 ">
                <boxStudents student={Students[0]}/>
            </div>
        </div>
        </>
    )
}