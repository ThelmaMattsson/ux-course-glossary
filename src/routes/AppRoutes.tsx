import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { GlossaryList } from "../components/GlossaryList";
import { GlosTest } from "../components/GlosTest";
import words from '../words.json';
import type { Card } from "../components/GlossaryItem";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/glossary" element={<GlossaryList cards={words as Card[]}/>}/>
            <Route path="/glosTest" element={<GlosTest />}/>
        </Routes>
    )
}