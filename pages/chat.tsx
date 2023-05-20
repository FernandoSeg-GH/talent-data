"use client"
import { Chat } from '@/components/Chat'
import Layout from '@/components/layout/Layout'
import React from 'react'

type Props = {}

export default function chat({}: Props) {
  return (
    <Layout>
        <section className='mt-20'>
        <Chat />    
        </section>
    </Layout>
  )
}