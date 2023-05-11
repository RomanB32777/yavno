import { NextPage } from 'next'

import { IComponentWithChildren } from './app'

export type PageProps = {
	isProtected?: boolean
}

export type NextPageWithProps<P = {}> = NextPage<P> & PageProps

export type TypeComponentAuthFields = { Component: PageProps } & IComponentWithChildren
