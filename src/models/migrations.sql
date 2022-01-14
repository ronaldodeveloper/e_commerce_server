-- table cliente
create table cliente(
    id serial primary key,
	nome varchar(50) not null,
	email varchar(50) not null unique,
	cpf bigint not null unique,
	senha integer not null,
	compras_id integer,
	endereco_id varchar(100) not null,
	foreign key (compras_id) references compras (quant),
	foreign key (endereco_id) references endereco (endereco)
);



-- table endereco
create table endereco(
    id serial,
    endereco varchar(100) primary key,
	bairro varchar(50),
	cidade varchar(50),
	estado varchar(50),
	cep integer
);

-- table compras
create table compras(
    id serial,
    compras primary key,
	produto varchar(50),
	date timestamp
);

-- Alterar restrições NOT NULL 
alter table cliente 
alter column endereco_id drop not null;


-- Alterar tipo de dado de uma tabela
ALTER TABLE table_name
ALTER COLUMN column_name TYPE new_data_type;



-- INSERT registros
INSERT INTO public.cliente(nome, email, cpf, senha, compras_id, endereco_id)
VALUES ('Jonh','john@hotmail.com',124124121457, 123123,1,'Miguel de frias 22');

INSERT INTO public.compras (quant, produto, date)
VALUES (2,'celular','2017-08-15 21:05:15.72333607');

INSERT INTO public.endereco (endereco, bairro, cidade, estado, cep)
VALUES ('Miguel de frias 51','Icarai','Niteroi', 'RJ', 22220221);