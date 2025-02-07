import { atom } from "jotai";
import { PortfolioProjectData } from "./atoms/app_data";

export const mock_portfolio_projects_jotai = atom<PortfolioProjectData[]>([]);
