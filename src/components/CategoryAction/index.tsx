import React from 'react'
import Link from "next/link";
import { BsArrowDownShort } from "@react-icons/all-files/bs/BsArrowDownShort";
import { ButtonDepartment, CategoryNavigation, ContainerCategory, MenuCategory, MenuDepartment, Navigation } from './styles'

export const CategoryAction = () => {
    return (
        <ContainerCategory>
            <MenuCategory>
                <MenuDepartment>
                    <ButtonDepartment>
                        TODOS OS DEPARTAMENTOS <BsArrowDownShort size={30} />
                    </ButtonDepartment>
                </MenuDepartment>

                <Navigation>
                    <CategoryNavigation>
                        <Link href="">
                            <a>LANÇAMENTOS</a>
                        </Link>
                        <Link href="">
                            <a>CAMISAS</a>
                        </Link>
                        <Link href="">
                            <a>BLUSAS</a>
                        </Link>
                        <Link href="">
                            <a>CALÇAS</a>
                        </Link>
                        <Link href="">
                            <a>SHORTS</a>
                        </Link>
                    </CategoryNavigation>
                </Navigation>
            </MenuCategory>
        </ContainerCategory>
    )
}
