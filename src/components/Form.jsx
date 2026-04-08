import React from 'react'
import { postService } from '../API/Api'
import { useForm } from 'react-hook-form'
import '../components/Form.css'

export const MovieForm = ()=>{
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
} = useForm();

const onSubmit = async (data)=>{
try {
    const res = await postService(data)
    console.log(res.data)

    reset
    alert("Movie Added")
} catch (error) {
    console.log(error);
}
}

return <>
<form className="movie-form" onSubmit={handleSubmit(onSubmit)} >
<h2>Add Movie</h2>

<input 
type='text'
placeholder='Movie Title'
{...register("original_title", {required:'Movie Title Required'} )}
/>
{errors.original_title && <p>{errors.original_title.message}</p>}

<input
type='text'
placeholder='poster URL'
{...register("profile_path",{required:"poster url required"})}
/>
{errors.profile_path && <p>{errors.profile_path.message}</p>}

<button type='submit'>
    {isSubmitting?"adding...": "Add Movie"}
</button>

</form>
</>

}