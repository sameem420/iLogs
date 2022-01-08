import useInput from '../../customhooks/useInput';
import '../../App.css';
import { addNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

function Form() {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const dispatch = useDispatch();
    const SubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addNote({ title, content }));
        resetTitle();
        resetContent();
    }
    return (
        <div className="section">
            <form onSubmit={SubmitHandler} className="white hoverable" style={{borderRadius: '5px'}}>
                <h4 className="gray-text center-align">New Note</h4>
                <div className="input-field">
                    <input id="first_name" type="text" {...bindTitle}/>
                    <label htmlFor="first_name">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="textarea1" className="materialize-textarea" {...bindContent} />
                    <label htmlFor="textarea1">Note Content</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form;
