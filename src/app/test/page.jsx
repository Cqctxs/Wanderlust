import { MapWrapper } from '@/components/ui/map';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import data from '@/app/map/test.json';
import { Modal } from '@/components/ui/modal';

export default function MapPage() {
    return (
        <>
        <MapWrapper/>
        <Modal/>
        </>
    );
}