import styles from './EditCharacter.module.css'
import { Header, Input } from '../../components'
import { useCallback, useEffect, useState } from 'react'
import { ICharacterstate } from '../../interfaces/character.interface'
import { useParams } from 'react-router-dom'
import { useContainer } from './container'
import { Formik } from 'formik'
import * as Yup from 'yup'

export const EditCharacter = () => {

  const { id } = useParams()

  const {
    state: { characterByID, isLoading },
    dispatchFn: { getCharacterByID, editCharacter }
  } = useContainer()

  useEffect(() => {
    getCharacterByID(+id!)
  }, [])

  if (isLoading) return <h1>Cargando...</h1>

  return (
    <>
      <Header />
      <div className="header-border"></div>

      <main className={styles['main-content']}>

        <h1>Editar Personaje</h1>

        <section>
          <figure>
            <img src={characterByID?.images[0]} alt="character-image" />
          </figure>

          <Formik
            initialValues={{
              name: ''
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Requerido')
            })}
            onSubmit={({ name }) => {
              const characterData = {
                id: characterByID!.id,
                name: name!,
                images: characterByID!.images
              }

              editCharacter(characterData)
              
            }}
          >
            {({ handleSubmit, handleChange, errors, values, touched }) => (
              <form className={styles['edit-form']} onSubmit={handleSubmit}>
                <Input 
                  label={'Nombre'} 
                  name={'name'} 
                  type={'text'} 
                  onChange={handleChange}
                  values={values.name}
                  errors={errors.name}
                  touched={touched.name}
                />

                <button type='submit' className={styles['button-submit']}>
                  Editar
                </button>
              </form>
            )}
          </Formik>

        </section>

      </main>
    </>
  )
}
