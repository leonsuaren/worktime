import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { StyledCreateCard, Title, SelectChannel, Label, Span, Select, SelectDepartment, SelectImage, Input, CreateContent, Button } from './styled';
import { Modal } from '../../../components/modal';

export const CreateCard = () => {
  const { register, handleSubmit } = useForm();
  const [cardInformation, setCardInformation] = useState("");
  console.log(cardInformation)
  return (
    <Fragment>
      <Modal />
      <StyledCreateCard onSubmit={handleSubmit((data) => setCardInformation(data))}>
        <Title>Create a Card</Title>
        <SelectDepartment>
          <Label for="department"><Span>Department:</Span></Label>
          <Select {...register("department")} name="department">
            <option value='human-resuorces' >Human Resources</option>
            <option value='warehouse' >Warehouse</option>
            <option value='freezer' >Freezer</option>
            <option value='perishable' >Perishable</option>
          </Select>
        </SelectDepartment>
        <SelectChannel>
          <Label for="channel"><Span>Channel:</Span></Label>
          <Select {...register("channel")} name="channel">
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
          <Select {...register("type")} name="type" defaultValue="announcements">
            <option value="informative">Informative</option>
            <option value="announcements">Announcement</option>
          </Select>
        </SelectChannel>
        <CreateContent>
          <Label for="title"><Span>Title</Span></Label>
          <Input {...register("title")} type="text" name="title" placeholder="Title" />
        </CreateContent>
        <CreateContent>
          <Label for="subtitle"><Span>Subtitle</Span></Label>
          <Input {...register("subtitle")} type="text" name="subtitle" placeholder="Subtitle" />
        </CreateContent>
        <Label for="content"><Span>Content</Span></Label>
        <textarea {...register("content")} type="text" name="content" placeholder="Content" cols="30" rows="20" />
        <SelectImage>
          <Label for="selectImage"><Span>Upload Image</Span></Label>
          <Input disabled type="file" />
        </SelectImage>
        <Button>Preview</Button>
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


// <CheckBoxSection>
// <CheckDepartment>
//   <FloatingTitle>Department</FloatingTitle>
//   <Label><Span>Human Resources:</Span>
//     <Input type='checkbox' />
//   </Label>
//   <Label> <Span>Warehouse:</Span>
//     <Input type='checkbox' />
//   </Label>
//   <Label> <Span>Freezer:</Span>
//     <Input type='checkbox' />
//   </Label>
//   <Label> <Span>Perishable:</Span>
//     <Input type='checkbox' />
//   </Label>
// </CheckDepartment>
// <CheckTypeOfCard>
//   <FloatingTitle>Card Type</FloatingTitle>
//   <Label><Span>Informative:</Span>
//     <Input type='checkbox' />
//   </Label>
//   <Label> <Span>Announcements:</Span>
//     <Input type='checkbox' />
//   </Label>
// </CheckTypeOfCard>
// </CheckBoxSection>
// <AddingTextSection>
// <SelectChannel>
//   <Label for="cars"><Span>Channel:</Span></Label>
//   <select name="cars" id="cars">
//     <option value="volvo">Diversity and Inclusion</option>
//     <option value="saab">COVIT-19 Comunications</option>
//     <option value="mercedes">Focus on Wellness</option>
//     <option value="audi">Staying Safty at Home</option>
//     <option value="audi">Feed Your Spirit</option>
//     <option value="audi">News to Know</option>
//     <option value="audi">Carries Corner</option>
//     <option value="audi">FAQ's about work</option>
//     <option value="audi">Announcements</option>
//   </select>
// </SelectChannel>
// </AddingTextSection>