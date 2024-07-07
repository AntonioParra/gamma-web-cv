export type CvType = {
    header: HeaderType,
    personal: PersonalType,
    experience: ExperienceType[],
    expertise: ExpertiseType[],
    certifications: CertificationType[],
    education: EducationType[]
}

export type HeaderType = {
    title: string,
    links: HeaderLinkType[]
}

export type HeaderLinkType = {
    section: string,
    text?: string,
    img?: string
    href: string,
}

export type PersonalType = {
    fullname: string,
    position: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    pic: string
}

export type ExperienceType = {
    company: string,
    position: string,
    since: string,
    until: string,
    description: string
}

export type ExpertiseType = {
    category: string,
    items: ExpertiseItemType[]
}

export type ExpertiseItemType = {
    name: string,
    img: string,
    imgWidth: string
}

export type CertificationType = {
    title: string,
    date: string
}

export type EducationType = {
    title: string,
    school: string,
    since: string,
    until: string,
    grade: string
}
