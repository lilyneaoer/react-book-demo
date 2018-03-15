import React,{Component} from 'react';

class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }
    handleUserNameOnChange (event){
        this.setState({
            username:event.target.value
        })
        // console.log(this.state.username)
    }
    handleContentOnChange (event){
        this.setState({
            content:event.target.value
        })
        // console.log(this.state.content)
    }
    handleSubmit(){
        // 发送评论
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content});
            // console.log("Submit OK");
        }
        // console.log('CommentInput:'+this.state.username,this.state.content);
        this.setState({content:''})
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onChange={this.handleUserNameOnChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                                  onChange={this.handleContentOnChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;