import React, { useState, Fragment, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import anime from 'animejs';
// import { useForm } from 'react-hook-form';
import { StyledCreateCard, Title, SelectChannel, Label, Span, Select, SelectDepartment, SelectImage, Input, CreateContent, Button } from './styled';
import { Modal } from '../../../components/modal';

export const CreateCard = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    var createCard = document.getElementById('createCardAnimation');
    anime.remove(createCard);
    animationRef.current = anime({
      targets: '#createCardAnimation',
      translateX: [-350, 0],
      easing: 'easeOutExpo'
    });
  }, []);

  const validate = value => {
    const errors = {};
    if (!value.department) {
      errors.department = 'Required'
    }
    if (!value.channel) {
      errors.channel = 'Required'
    }
    if (!value.type) {
      errors.type = 'Required'
    }
    if (!value.title) {
      errors.title = 'Required'
    }
    if (!value.subtitle) {
      errors.subtitle = 'Required'
    } 
    if (!value.content) {
      errors.content = 'Required'
    }
  };

  const formik = useFormik({
    initialValues: {
      department: '',
      channel: '',
      type: '',
      title: '',
      subtitle: '',
      content: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <Modal />
      <StyledCreateCard id='createCardAnimation' onSubmit={formik.handleSubmit}>
        <Title>Create a Card</Title>
        <SelectDepartment>
          <Label for="department"><Span>Department:</Span></Label>
          <Select
            name="department"
            onChange={formik.handleChange}
            value={formik.values.department}>
            <option value='human-resources' >Human Resources</option>
            <option value='warehouse' >Warehouse</option>
            <option value='freezer' >Freezer</option>
            <option value='perishable' >Perishable</option>
          </Select>
        </SelectDepartment>
        <SelectChannel>
          <Label for="channel"><Span>Channel:</Span></Label>
          <Select
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}>
            <option value="diversity">Diversity and Inclusion</option>
            <option value="covid">COVIT-19 Comunications</option>
            <option value="focus">Focus on Wellness</option>
            <option value="staying">Staying Safty at Home</option>
            <option value="feed">Feed Your Spirit</option>
            <option value="news">News to Know</option>
            <option value="carries">Carries Corner</option>
            <option value="faqs">FAQ's about work</option>
            <option value="annuoncements">Announcements</option>
          </Select>
        </SelectChannel>
        <SelectChannel>
          <Label for="type"><Span>Card Type:</Span></Label>
          <Select
            name="type"
            defaultValue="announcements"
            onChange={formik.handleChange}
            value={formik.values.type}>
            <option value="informative">Informative</option>
            <option value="announcements">Announcement</option>
          </Select>
        </SelectChannel>
        <CreateContent>
          <Label for="title"><Span>Title</Span></Label>
          <Input type="text" name="title" placeholder="Title" onChange={formik.handleChange} value={formik.values.title}/>
          {formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </CreateContent>
        <CreateContent>
          <Label for="subtitle"><Span>Subtitle</Span></Label>
          <Input type="text" name="subtitle" placeholder="Subtitle" onChange={formik.handleChange} value={formik.values.subtitle}/>
        </CreateContent>
        <Label for="content"><Span>Content</Span></Label>
        <textarea type="text" name="content" placeholder="Content" cols="30" rows="20" onChange={formik.handleChange} value={formik.values.content}/>
        <SelectImage>
          <Label for="selectImage"><Span>Upload Image</Span></Label>
          <Input disabled type="file" />
        </SelectImage>
        <Button type='submit'>Preview</Button>
      </StyledCreateCard>
    </Fragment>
  )
}
//=======Informative======
// department: 'Human Resources',
// logo: "/images/humanresources.png",
// channel_title: 'FAQ\'s about work',
// icon: 'StyledAiOutlineExclamation',
// cards: [
//     _idCard: 'CHFWHR03401062239U',
//     title: 'Stop Multitasking.',
//     type: 'informative',
//     subtitle: 
//     description: 
//     img: '/images/channels/multitask.png',
//     date: new Date(),
//     likes: 0,
//     unlikes: 0
//=====announcement=====
// department: 'Warehouse',
// logo: "/images/humanresources.png",
// channel_title: 'Announcements',
// icon: 'StyledAiOutlineAudio',
// cards: [
//   {
//     _idCard: 'CHAWE001010622AR5',
//     title: 'Stop Multitasking.',
//     type: 'announcement',
//     subtitle: 'Many people fool themselves into thinking.',
//     description: 'Many people fool themselves into thinking they are good at multitasking. But actually very few can solidly focus on more than 1 or two tasks, particularly if they require focus and depth.  They fool themselves into believing they are getting more done when in reality they are accomplishing less and the quality of the work is poor. Really efficient people know that concentrated effort with few distractions leads to better work product in faster times. Otherwise the work may not be up to par, which means wasting even more time and energy going back to fix the mistakes.',
//     date: new Date(),
//   },

// export const CreateCard = () => {
//   const { register, handleSubmit } = useForm();
//   const [cardInformation, setCardInformation] = useState("");
//   const fullCardInformation = {};
//   const cardId = (Math.floor(4000*Math.random()).toString()) + Date.now();
//     fullCardInformation.deparment = cardInformation.department;
//     fullCardInformation.logo = '/images/humanresources.png';
//     fullCardInformation.channel = cardInformation.channel;
//     fullCardInformation.type = cardInformation.type;
//     fullCardInformation.title = cardInformation.title;
//     fullCardInformation.subtitle = cardInformation.subtitle;
//     fullCardInformation.content = cardInformation.content;
//     fullCardInformation._cardId = cardId;

//     console.log(fullCardInformation);
//   const handleOnShowPreview = () => {
//   }

//   return (
//     <Fragment>
//       <Modal cardInformation={cardInformation} />
//       <StyledCreateCard onSubmit={handleSubmit((data) => setCardInformation(data))}>
//         <Title>Create a Card</Title>
//         <SelectDepartment>
//           <Label for="department"><Span>Department:</Span></Label>
//           <Select {...register("department")} name="department">
//             <option value='human-resources' >Human Resources</option>
//             <option value='warehouse' >Warehouse</option>
//             <option value='freezer' >Freezer</option>
//             <option value='perishable' >Perishable</option>
//           </Select>
//         </SelectDepartment>
//         <SelectChannel>
//           <Label for="channel"><Span>Channel:</Span></Label>
//           <Select {...register("channel")} name="channel">
//             <option value="diversity">Diversity and Inclusion</option>
//             <option value="covid">COVIT-19 Comunications</option>
//             <option value="focus">Focus on Wellness</option>
//             <option value="staying">Staying Safty at Home</option>
//             <option value="feed">Feed Your Spirit</option>
//             <option value="news">News to Know</option>
//             <option value="carries">Carries Corner</option>
//             <option value="faqs">FAQ's about work</option>
//             <option value="annuoncements">Announcements</option>
//           </Select>
//         </SelectChannel>
//         <SelectChannel>
//           <Label for="type"><Span>Card Type:</Span></Label>
//           <Select {...register("type")} name="type" defaultValue="announcements">
//             <option value="informative">Informative</option>
//             <option value="announcements">Announcement</option>
//           </Select>
//         </SelectChannel>
//         <CreateContent>
//           <Label for="title"><Span>Title</Span></Label>
//           <Input {...register("title")} type="text" name="title" placeholder="Title" />
//         </CreateContent>
//         <CreateContent>
//           <Label for="subtitle"><Span>Subtitle</Span></Label>
//           <Input {...register("subtitle")} type="text" name="subtitle" placeholder="Subtitle" />
//         </CreateContent>
//         <Label for="content"><Span>Content</Span></Label>
//         <textarea {...register("content")} type="text" name="content" placeholder="Content" cols="30" rows="20" />
//         <SelectImage>
//           <Label for="selectImage"><Span>Upload Image</Span></Label>
//           <Input disabled type="file" />
//         </SelectImage>
//         <Button>Preview</Button>
//       </StyledCreateCard>
//     </Fragment>
//   )
// }