import React, {useContext, useState} from 'react';
import Button from "../../../shared/Button";
import Input from "../../../shared/Input";
import {useForm} from "react-hook-form";
import Loader from "../../../shared/Loader";
import {
    ButtonsWrapper,
    ErrorBox,
    InputsWrapper,
    ModalBackground,
    ModalBox,
    ModalForm,
    ModalHeader,
    StyledCloseIcon
} from "./AddIssueModal.styles";
import {IssueListContext} from "../list/IssuesList";
import {createItem} from "../../../../services/httpService";


const AddIssueModal = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {loadIssues, setAddIssueModalVisible} = useContext(IssueListContext)
    const hideModal = () => setAddIssueModalVisible(false)

    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setHasError(false)
            setIsLoading(true)
            await createItem({restUrl: 'issues', data})
            loadIssues()
            hideModal()
        } catch (e) {
            console.error('Error while creating an issue!')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <ModalBox>
                <Loader isLoading={isLoading}>
                    <ModalForm onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>
                            <h3>Create issue</h3>
                            <StyledCloseIcon fontSize={'inherit'} onClick={hideModal}/>
                        </ModalHeader>
                        <InputsWrapper>
                            <Input
                                label="title"
                                {...register("title", {required: true})}
                                hasError={errors.title}
                                placeholder='Provide issue title...'
                            />
                            <Input
                                label="description"
                                {...register("description", {required: true})}
                                hasError={errors.description}
                                placeholder='Provide issue description...'
                            />
                            <ErrorBox visible={hasError}>Creating new issue failed.</ErrorBox>
                        </InputsWrapper>
                        <ButtonsWrapper>
                            <Button marginRight={'1.5rem'} type={'submit'}>Save</Button>
                            <Button onClick={hideModal} outline>Cancel</Button>
                        </ButtonsWrapper>
                    </ModalForm>
                </Loader>
            </ModalBox>
            <ModalBackground/>
        </>
    );
};

export default AddIssueModal;