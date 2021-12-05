import { Card, Typography, Space } from '@supabase/ui'
import { supabase } from '../utils/initSupabase'

export default function Table({ tableData }) {
    return (
        <pre>{JSON.stringify(tableData, null, 2)}</pre>
    )
}

export async function getServerSideProps(context) {
    const token = context.req.cookies['sb:token']
    supabase.auth.setAuth(token)
    let { data, error } = await supabase.from('ll_templates').select('*')

    if (error) {
        console.error(error.message)
        return { props: {}, redirect: { destination: '/', permanent: false } }
    }


    return { props: { tableData: data } }
}

