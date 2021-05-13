import React, { useState } from 'react';
import { CommentFormField, MainDiv, HiperDiv } from './styles';
import Comment from '../Comment';
import { Subject } from '../../service/DataService';
import SubjectName from '../SubjectName';

interface CommentFormProps{
  setShowModal: (signUpModalState: boolean) => void;
  subject: Subject;
}

const CommentForm: React.FC<CommentFormProps> = (props:CommentFormProps) => {
  const comentarios = [
    {
      user: 'Marcos',
      text: 'Melhor aula que eu já tive na vida. Ele é incrível!',
    },
    {
      user: 'Caio',
      text: 'Espero que ele queime no inferno.anlsxhnkcbhec hbcdeklhbvew olhbcekevbhvelhbevlhe leceikubvdsluivebvvbleabhubv ebvurv cenvlei',
    },
    {
      user: 'Júlia',
      text: 'Espero que ele queime no inferno.anlsxhnkcbhechbcdeklhbvew olhbcekevbhvelhbevlhelecb  levlbvewlbvewlevblaaaaaaaaaaaaa',
    },
  ];

  const [comments, setComments] = useState(comentarios);
  const [user, setUser] = useState('User');
  const [text, setText] = useState('');
  const { subject } = props;

  const postComment = () => {
    setComments(comments.concat({ user, text }));
    console.log(comments);
  };

  return (
    <HiperDiv>
      <MainDiv>
        <header>
          <strong>Relate sua Experiência!</strong>
          <button onClick={() => props.setShowModal(false)}>
            <img src="imgs/close.svg" alt="fechar" />
          </button>
        </header>
        <strong>{subject.name}</strong>
        <CommentFormField>
          <textarea rows={8} placeholder="Escreva aqui!" onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              postComment();
            }}
          >
            Postar Comentário
          </button>
        </CommentFormField>
        <div>
          <strong>Relatos</strong>
        </div>
        <div>
          {comments.map((com) => <Comment name={com.user} text={com.text} />)}
        </div>
      </MainDiv>
    </HiperDiv>
  );
};

export default CommentForm;
