import { create } from "zustand"

interface mdListCert{
    name: string
    url: string
}

export {mdListCert}

interface IpListCertStore{
    data: mdListCert
    setData: (data) => void
}

const useListCert = create<IpListCertStore>(
    (set,get) => ({
        data: {name:'name', url: 'url'},
        setData: (data) => set({data:data})
    })
)

export {useListCert}

