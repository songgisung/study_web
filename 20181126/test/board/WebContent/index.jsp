<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jsp</title>
</head>
<body>
<%
 int idx = 1;
String title = request.getParameter("title");
String writer = request.getParameter("writer");
String regdate = request.getParameter("regdate");
int count = 111;
String content = request.getParameter("content");
%>
	<h1>게시판 리스트</h1>
		<table>
			<tr>
				<th>番号</th>
				<th>題目</th>
				<th>作成人</th>
				<th>日数</th>
				<th>クリック数</th>
			</tr>
			<tr>
				<td><%=idx %></td>
				<td><%=title %></td>
				<td><%=writer %></td>
				<td><%=regdate %></td>
				<td><%=count %></td>
			</tr>
		</table>

</body>
</html>