import React from 'react'

function Pagination(props) {

    function getPaginas(){
        const resultado = [];
        for(let i = 0; i < props.total; i++){
            let pagina = i + 1;
            resultado.push(
            <div className = {props.pagina === pagina ? 'active' : ''} onClick={()=> props.onChange(pagina)}>
            <a href='#'>
            {pagina}
            </a>
            </div>
            )
        }
        return resultado;
    }
    return (
        
        <div className="topbar-filter">
			<div className="pagination">
				<span>Página {props.pagina} de {props.total}</span>			
			</div>
            <div className="total-paginas">
            {getPaginas()}

            </div>

		</div>
    )
}

export default Pagination