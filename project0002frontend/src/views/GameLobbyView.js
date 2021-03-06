import React, { useEffect } from 'react'
import ServerList from 'components/serverlist'
import GameFilterForm from 'components/forms/GameFilterForm'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
const GameLobbyView = () => {
    const lobbyId = useParams().lobbyId;
    const { lobbyList } = useSelector((state) => state.app);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (lobbyId !== "cah" || lobbyList.length === 0) navigate("/");

    }
        , [lobbyId, navigate, lobbyList, dispatch])
    return (
        <div>
            <h1>{lobbyId}</h1>
            <button> Create Game </button>
            <GameFilterForm />
            {/* -><CreateGamePopup />> */}
            <ServerList />
        </div>
    )
}

export default GameLobbyView
