import React, { Component } from 'react';
import { Field, reduxForm, initialize} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createComment, fetchPostEdit } from '../actions'


class CommentsForm extends Component {
//   componentDidMount() {
//         if(this.props.posts) {
//         const { id }  = this.props.match.params;
//         this.props.fetchPostEdit(id).then(() => {
//           this.handleInitialize();
//         })
//   }
// }

  handleInitialize() {

  const initData = {
    "title": this.props.posts.title,
    "author": this.props.posts.author,
    "body": this.props.posts.body,
  };

  this.props.initialize(initData);
  }


   renderField(field) {

    const { meta:{ touched, error  } } = field;
    const className =  `form-group ${touched && error ? 'has-danger': ''}`;


    return (
        <div className={className}>
          <label>{field.label}</label>
          <field.type
            className="form-control"
            type="text"
            {...field.input}
          />
          <div className="text-help">
              {touched ? error : ''}
          </div>
        </div>
      );
   }


    onSubmit(values) {
      const { id }=this.props.id
      if(id){
        values['timestamp'] = new Date()
        this.props.editPost(id,values,() => {
            this.props.history.push('/');
        });
      }
      else{
      values['timestamp'] = new Date()
      this.props.createComment(id,values,()=> {
          null;
      });
    }
    }



   render() {

     const { handleSubmit } = this.props;


     return(
       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            type="input"
            component={this.renderField}

          />
          <Field
            label="Author"
            name="author"
            type="input"
            component={this.renderField}
          />
          <Field
            label="Comments"
            name = "body"
            type="textarea"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary submit sumbmi-comment">Submit</button>
       </form>
     );
   }
}

function validate(values) {

  const errors = {};

 if(!values.title || values.title.length < 3) {
   errors.title = "Enter a title that us at least 3 characters!";
 }
 if(!values.author) {
   errors.author = 'Enter an author'
 }
if(!values.body) {
  errors.body = 'Enter some content please'
}


 return errors;

}




export default reduxForm({
   validate,
   form: 'CommentForm'
})(
  connect(null, { createComment, fetchPostEdit})(CommentsForm)
);
