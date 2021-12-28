import React from 'react'
import {
    SearchAplication,
    SearchForm,
    Input,
    ButtonSearch,
    IconSend,
} from './styles'

export const SearchProducts = () => {
    return (
        <SearchAplication>
            <SearchForm
                action="search.search"
                method="GET"
            >
                <Input autoComplete="off" type="text" placeholder="Busque aqui" />
                <ButtonSearch type="submit">
                    <IconSend />
                </ButtonSearch>
            </SearchForm>
        </SearchAplication>
    )
}
